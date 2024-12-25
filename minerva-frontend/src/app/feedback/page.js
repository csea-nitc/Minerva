import FeedBack from "../components/feedback/Feedback";
export default function FeedbackPage() {
    return (
        <div className="pt-10 mt-10 lg:px-[20vw] md:px-[15vw] px-[10vw] w-[100vw]">
            <h1 className="md:text-4xl font-mont font-bold text-2xl">
                Feedback
            </h1>
            <FeedBack />
        </div>
    );
}
