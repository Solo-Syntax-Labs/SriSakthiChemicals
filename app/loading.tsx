import Image from "next/image";

export default function Loading() {
  return (
    <div className="page-loader page-loader-route" aria-live="polite" role="status">
      <div className="page-loader-inner">
        <Image
          src="/images/loading.gif"
          alt="Loading"
          width={240}
          height={90}
          className="page-loader-gif"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
