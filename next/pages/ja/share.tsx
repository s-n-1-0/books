import BookComment, {
  BookCommentRefType,
} from "@/components/books/book-comment";
import BookLinks from "@/components/books/book-links";
import BookThumbnail from "@/components/books/book-thumbnail";
import SearchBookFields from "@/components/books/search-book-fields";
import CustomHead from "@/components/head";
import Header from "@/components/header";
import ProcessingView from "@/components/processing-view";
import TweetButton from "@/components/tweet-button";
import { OpenBDGetResponseData } from "@/Interfaces/openbd/get";
import { sendMessage } from "@/libs/flutter/flutter_inappwebview";
import { searchGoogleBooksApiByIsbn } from "@/libs/googlebooks";
import * as openbd from "@/libs/openbd";
import { makeSharePageLink, SharePageFromDb } from "@/utils/links";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
interface BookData {
  title: string;
  author: string;
  thumbnail: string;
  isbn: string;
  publisher: string;
  description: string;
  from: SharePageFromDb;
}
const Home: NextPage = () => {
  const router = useRouter();
  const { isbn, from, comment, noheader: _noheader } = router.query;
  const isHeader = !(typeof _noheader == "string");
  const [bookData, setBookData] = useState<BookData | null>(null);
  const [errorText, setErrorText] = useState<string>("");
  const [isHello, setIsHello] = useState<boolean>(false);
  const [isClickedShareButton, setIsClickedShareButton] = useState(false);
  const commentRef = useRef<BookCommentRefType>(null);
  function updateQueryComment() {
    return typeof comment == "string" ? decodeURIComponent(comment) : "";
  }
  useEffect(() => {
    setUserComment(updateQueryComment());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment]);
  const [userComment, setUserComment] = useState<string>(updateQueryComment());

  useEffect(() => {
    if (!router.isReady) return;
    if (typeof isbn == "string") {
      setIsHello(false);
      let fromDb = typeof from == "string" ? from : "";
      switch (fromDb) {
        case "opendb":
        default:
          openbd
            .get(isbn)
            .then((res: { data: OpenBDGetResponseData }) => {
              let resBookData = res.data?.[0];
              if (resBookData) {
                setBookData({
                  title: resBookData.summary.title,
                  author: resBookData.summary.author,
                  isbn: resBookData.summary.isbn,
                  publisher: resBookData.summary.publisher,
                  thumbnail: resBookData.summary.cover,
                  description:
                    resBookData.onix.CollateralDetail.TextContent?.[0].Text ??
                    "",
                  from: "openbd",
                });
                setIsHello(false);
              } else setErrorText("???????????????????????????????????????????????????????????????");
            })
            .catch(() => {
              setErrorText("??????????????????????????????????????????????????????????????????");
            });
          break;
        case "googlebooks":
          searchGoogleBooksApiByIsbn(isbn)
            .then((book) => {
              if (book) {
                setBookData({
                  title: book.volumeInfo.title,
                  author: book.volumeInfo.authors.join(" "),
                  isbn: isbn,
                  publisher: book.volumeInfo.publisher ?? "",
                  thumbnail: book.volumeInfo?.imageLinks?.smallThumbnail ?? "",
                  description: book.volumeInfo.description ?? "",
                  from: "googlebooks",
                });
                setIsHello(false);
              } else setErrorText("???????????????????????????????????????????????????????????????");
            })
            .catch(() => {
              setErrorText("??????????????????????????????????????????????????????????????????");
            });
          break;
      }
    } else {
      //isbn??????????????????
      setIsHello(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, isbn]);

  function makeMainContent() {
    if (isHello || errorText != "") {
      return <SearchBookFields errorText={errorText}></SearchBookFields>;
    }
    if (!bookData) {
      return (
        <div>
          <ProcessingView />
        </div>
      );
    }
    return (
      <div className="mx-auto" style={{ maxWidth: "1250px" }}>
        <div className="flex items-center justify-center pt-5  pb-2">
          {(() => {
            if (bookData.thumbnail == "") return;
            return (
              <span className="mr-2">
                <BookThumbnail src={bookData.thumbnail} />
              </span>
            );
          })()}
          <span className="text-3xl">{bookData.title}</span>
        </div>
        <p className="text-secondary text-center">
          <span className="text-xl">ISBN : {bookData.isbn}</span>
          <button
            className="text-sm bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded ml-2"
            onClick={() => {
              navigator.clipboard.writeText(bookData.isbn);
            }}
          >
            ?????????
          </button>
        </p>
        <p className="text-center">
          ?????? : {bookData.author}{" "}
          {(() => {
            if (bookData.publisher == "") return;
            return <span>/ ????????? :{bookData.publisher}</span>;
          })()}
        </p>

        <p className="text-center mt-1 line-clamp-5">{bookData.description}</p>
        <div className="p-10">
          <BookComment
            comment={userComment}
            onChange={(newValue: string) => {
              setUserComment(newValue);
            }}
            ref={commentRef}
          />
          <div className="text-center mt-4 mb-10">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => {
                setIsClickedShareButton(true);
                commentRef?.current?.finishEditing();
                navigator.clipboard?.writeText(
                  makeSharePageLink(bookData.isbn, bookData.from, userComment)
                );
                sendMessage({
                  key: "completedSharing",
                  data: { type: "default", url: "" },
                });
              }}
            >
              ????????????????????????
            </button>
            {(() => {
              if (isClickedShareButton)
                return (
                  <p className="text-center text-secondary">
                    <small>??????URL???????????????????????????</small>
                  </p>
                );
            })()}
            <p>
              <div className="mx-auto mt-3">
                {(() => {
                  let twText = "";
                  if (userComment != "") {
                    twText =
                      (userComment.length > 75
                        ? userComment.slice(0, 70) + "..."
                        : userComment) +
                      "\n\n" +
                      `?????????${bookData.title}????????????`;
                  } else {
                    twText = `?????????${bookData.title}?????????????????????`;
                  }
                  let twUrl = makeSharePageLink(
                    bookData.isbn,
                    bookData.from,
                    userComment
                  );
                  return <TweetButton text={twText} url={twUrl} />;
                })()}
              </div>
            </p>
          </div>
          <hr />
          <div className="pt-2">
            <h1 className="text-xl">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
              ???????????????
            </h1>
            <small>
              ???????????????????????????????????????????????????????????????????????????????????????????????????
            </small>
            <BookLinks isbn={bookData.isbn} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <CustomHead
        title="????????????????????????????????? - ???????????????/Share Books"
        description="????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????URL???????????????????????????????????????????????????????????????????????????"
        pageUrl="https://books.sn-10.net/ja/share"
        ogType="product"
      ></CustomHead>
      {(() => {
        if (isHeader) return <Header></Header>;
      })()}

      <main>
        <div className="w-full px-2 ">{makeMainContent()}</div>
      </main>

      <footer>
        <hr />
        <p className="text-center">
          <a className="underline" href="https://hello.sn-10.net">
            sn-10.net
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
