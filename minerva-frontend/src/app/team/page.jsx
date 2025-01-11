import ImageHero from "../components/imagehero/Imagehero";
import TeamImage from "../components/teamimage/TeamImage";

const member = {
  image: "/me.png",
  name: "Arun Nats",
  role: "Junior Developer",
};

export default function TeamPage() {
  return (
    <>
      <div>
        <ImageHero
          title={"MEET THE TEAM"}
          font={"60px"}
          mobileFont={"50px"}
          contentdiv={".content-div"}
        />
        <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white px-[5%] py-3">
          <p className="mb-7 font-poppins text-[#800080] font-medium text-2xl break-words p-4 text-center">
            Meet our diverse team of world-class creators, designers, and
            problem solvers . . .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
            <TeamImage member={member} />
            <TeamImage member={member} />
            <TeamImage member={member} />
            <TeamImage member={member} />
            <TeamImage member={member} />
            <TeamImage member={member} />
            <TeamImage member={member} />
            <TeamImage member={member} />
            <TeamImage member={member} />
          </div>
        </div>
      </div>
    </>
  );
}
