import ImageHero from "../components/imagehero/Imagehero";
export default function accessibility() {
  return (
    <div>
      <ImageHero
        title={"Accessibility Statement"}
        font={"60px"}
        mobileFont={"30px"}
        contentdiv={".content-div"}
      />
      <div className="content-div pt-10 max-w-6xl mx-auto px-6 w-[100vw]">
        {/* <h1 className="md:text-4xl font-mont font-bold text-2xl">
                Accessibility Statement
            </h1> */}
        <div className="font-mont pt-6 pb-6">
          <p className="md:text-lg">
            We are trying to ensure that the CSED Website is accessible to all
            users irrespective of device in use, technology or ability. It is
            being built with an aim to provide maximum{" "}
            <span className="font-bold">accessibility and usability</span> to
            its visitors. As a result, this website will be viewable from a
            variety of devices, such as web-enabled mobile devices, wap phones,
            PDAs, and so on.
          </p>
          <p className="md:text-lg pt-6">
            We are putting in our best efforts to ensure that all information on
            this website is accessible to people with disabilities.&nbsp;For
            example, a user with visual disability will be able to access this
            website using assistive technologies, such as screen readers and
            magnifiers.
          </p>
          <p className="md:text-lg pt-6">
            We also aim to be standards compliant and follow principles of
            usability and universal design, which should help all visitors of
            this website.
          </p>
          <p className="md:text-lg pt-6">
            <strong>Place Holder &darr;&darr;&darr;</strong>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            optio distinctio natus nemo. Exercitationem sed distinctio nobis
            accusamus excepturi accusantium, dolores eaque nihil ipsum, modi
            nostrum numquam, rerum dolore reprehenderit! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Molestias et maxime cupiditate
            atque soluta, quibusdam, eligendi totam culpa placeat accusamus fuga
            beatae ipsa iure facilis adipisci sequi, nobis ab autem. Rem amet
            modi laudantium quae iste, quis consequuntur. Itaque excepturi
            deserunt eveniet id repellendus eos exercitationem, nulla ut ullam
            consequuntur natus repellat molestias quo nam officia enim
            laboriosam nemo minus! <br />
            <strong>Place Holder &uarr;&uarr;&uarr;</strong>
          </p>
          <p className="md:text-lg pt-6">
            If you have any problem or suggestion regarding the accessibility of
            this website, please{" "}
            <a
              href="/feedback"
              target="_blank"
              className="text-blue-500 underline hover:text-blue-700 focus:text-blue-700"
            >
              Tell Us
            </a>{" "}
            to enable us to respond in a helpful manner.
          </p>

        </div>
      </div>
    </div>
  );
}
