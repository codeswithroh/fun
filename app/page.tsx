import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <h1 className="text-xl md:text-2xl mb-4 font-bold text-center">
        HAPPY BIRTHDAY TO THE PRETTIEST WOMAN 🎂
      </h1>

      <div className="mockup-browser bg-base-300 border w-full md:w-auto">
        <div className="mockup-browser-toolbar">
          <div className="input">https://my-baby</div>
        </div>
        <div className="bg-base-200 flex justify-center px-2 py-8 md:px-4 md:py-16">
          <div className="carousel rounded-box w-full md:w-auto">
            <div className="carousel-item">
              <Image
                className="object-cover w-full md:w-auto"
                src="/img1.jpg"
                alt="Burger"
                width={300}
                height={200}
              />
            </div>
            <div className="carousel-item">
              <Image
                className="object-cover w-full md:w-auto"
                src="/img2.jpg"
                alt="Burger"
                width={300}
                height={200}
              />
            </div>
            <div className="carousel-item">
              <Image
                className="object-cover w-full md:w-auto"
                src="/img3.jpg"
                alt="Burger"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-4 bg-gray-800 rounded-lg shadow-md w-full md:w-auto">
        <h2 className="text-gray-300 text-lg md:text-xl font-bold mb-2 text-center">
          A Message to My Baby
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          Happy Birthday, my love! 🎉💖 For almost two beautiful years, you've
          been my heart, my joy, my everything. Watching you smile and holding
          you close has been the most incredible part of my life. You’re not
          just my girlfriend, you’re my little baby, my forever person, and the
          one I want to spend every moment of my life with. Every day with you
          is a blessing, and I can’t wait to create even more memories and share
          countless more adventures together. I love you more than words can
          say, and I promise to always be by your side, through every laugh,
          tear, and dream we chase together. 💫💍 Here’s to many more birthdays,
          many more kisses, and a lifetime of love. Happy Birthday, baby! 🎂🥂💕
        </p>
      </div>
    </main>
  );
}
