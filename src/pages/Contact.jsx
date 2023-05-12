import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "./Contact.css";

import "react-toastify/dist/ReactToastify.css";

import Background from "../../public/assets/images/background-about.png";

export default function Contact() {
	const form = useRef(null);

	const notify = (message) => {
		toast[message]("Success, your message was sent!", {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "dark",
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const name = e.target.name.value.trim();
		const email = e.target.user_email.value.trim();
		const message = e.target.message.value.trim();

		if (!name || !email || !message) {
			toast.error("Please fill in all required fields", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "dark",
			});
			return;
		}

		emailjs
			.sendForm(
				"service_lwojhle",
				"template_1kgkty5",
				e.target,
				"AsJ3rbV5H9oTVu7ox"
			)
			.then(
				(result) => {
					console.info(result.text);
					notify("success");
					form.current.reset();
				},
				(error) => {
					console.error(error.text);
					notify("error", "Oops, something went wrong!");
				}
			);
	};

	return (
		<section
			className="mb-10 grid h-full grid-cols-1 grid-rows-[auto_1fr] bg-cover bg-no-repeat px-4"
			style={{ backgroundImage: `url(${Background})` }}>
			<h1 className="text-center">Contact us</h1>
			<form
				className="flex flex-col items-center justify-center place-self-center "
				ref={form}
				onSubmit={sendEmail}>
				<div>
					<input
						className="form__input w-[80vw] items-start rounded px-5 py-1.5 outline-none placeholder:text-neutral-900 md:w-[600px]"
						type="text"
						placeholder="username"
						id="text"
						name="name"
					/>
				</div>
				<div>
					<input
						className="form__input w-[80vw] items-start rounded px-5 py-1.5 outline-none placeholder:text-neutral-900  md:w-[600px]"
						type="email"
						placeholder="email@example.com"
						id="email"
						name="user_email"
					/>
				</div>
				<div>
					<textarea
						className="textarea w-[80vw] items-start rounded px-5 py-1.5 outline-none placeholder:text-neutral-900  md:w-[600px]"
						placeholder="Type your text here"
						name="message"
					/>
				</div>
				<input
					className="form__input submit w-[80vw] md:w-[600px] "
					type="submit"
					value="Send"
					onClick={notify}
				/>
			</form>
			<ToastContainer />
		</section>
	);
}
