import Header from "@/components/header";
import ProcessingView from "@/components/processing-view";
import { OpenBDBookData, OpenBDGetResponseData } from "@/Interfaces/openbd/get";
import * as openbd from "@/libs/openbd";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
const Home: NextPage = () => {
  const router = useRouter();
  const { isbn } = router.query;
  const [bookData, setBookData] = useState<OpenBDBookData | null>(null);
  const [editingIsbn, setEdittingIsbn] = useState<string>("");
  let isHello = false;
  if (typeof isbn == "string") {
    openbd.get(isbn).then((res: { data: OpenBDGetResponseData }) => {
      setBookData(res.data?.[0]);
    });
  } else {
    //isbn未指定の場合
    isHello = true;
  }

  function makeMainContent() {
    if (isHello) {
      return (
        <div className="text-center">
          <h1 className="pt-5 text-3xl pb-2">書籍情報を共有</h1>
          <div className="mb-4 flex items-end">
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                ISBNで調べる
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="9784798056920"
                value={editingIsbn}
                onChange={(e) => {
                  setEdittingIsbn(e.target.value);
                }}
              />
            </div>
            {(() => {
              if (editingIsbn != "")
                return (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2 w-100 whitespace-nowrap"
                    onClick={() => {
                      location.href = "./share?isbn=" + editingIsbn;
                    }}
                  >
                    調べる
                  </button>
                );
              else return;
            })()}
          </div>
        </div>
      );
    }
    if (!bookData) {
      return (
        <div>
          <ProcessingView />
        </div>
      );
    }
    return (
      <div>
        <h1 className="text-center pt-5 text-3xl pb-2">
          {bookData.summary.title}
        </h1>
        <p className="text-center">
          著者 : {bookData.summary.author} / 出版社 :
          {bookData.summary.publisher}
        </p>
        <p className="text-secondary text-center">
          <span className="text-2xl">ISBN : {bookData.summary.isbn}</span>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded ml-2"
            onClick={() => {
              navigator.clipboard.writeText(bookData.summary.isbn);
            }}
          >
            コピー
          </button>
        </p>
        <div className="text-center p-10">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => {
              navigator.clipboard.writeText(
                `${location.origin + location.pathname}?isbn=${
                  bookData.summary.isbn
                }`
              );
            }}
          >
            この本を共有する
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>本を友だちに紹介する - Share Books</title>
        <meta
          name="description"
          content="書籍共有できるURLを発行します。ご自由にお使いください。"
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Header></Header>
      <main className="container mx-auto">{makeMainContent()}</main>

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
