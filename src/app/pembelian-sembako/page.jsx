import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";

export default function Pembelian() {
  return (
    <>
      <LayoutUtama>
        <div
          className=" overflow-hidden"
          style={{
            backgroundImage: "url(/tampilan/9.png)",
            width: "100%",
            height: "700px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute flex gap-8 items-center right-14 top-8">
            <div className="border-2 w-[160px] h-[50px] w- rounded-full relative">
              <Image
                alt="button"
                src={"/bahan/button/18.png"}
                width={60}
                height={60}
                className="absolute -left-10 -bottom-4"
              />
            </div>
            <div className="border-2 w-[160px] h-[50px] rounded-full relative">
              <Image
                alt="button"
                src={"/bahan/button/20.png"}
                width={70}
                height={70}
                className="absolute -left-10 -bottom-4"
              />
            </div>
          </div>

          <Link href={"/bayar"}>
            <div className="rounded-full  w-[130px] flex items-center justify-center h-[40px] border">
              Bayar
            </div>
          </Link>
        </div>
      </LayoutUtama>
    </>
  );
}
