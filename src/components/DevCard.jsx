export default function DevCard({}) {
  return (
    <div className=" flex flex-wrap justify-center gap-x-16 gap-y-16">
      <div className=" mobile:w-60 tablet:w-72 desktop:w-80">
        <div className="card rounded-md  mobile:h-80 tablet:h-96 desktop:h-96 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/640px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg"
            alt="pokemon"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex justify-between	">
          <div className=" title-date ml-4 ">
            <h1 className="font-bold text-black text-xl ">London</h1>
            <h2 className="text-black">date</h2>
          </div>
        </div>
      </div>
    </div>

  );
}
