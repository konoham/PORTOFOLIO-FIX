import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export const SendEmail = (form, e, setIsLoading) => {
  setIsLoading(true);
  e.preventDefault();
  emailjs
    .sendForm("service_kj2o1hf", "template_idtsf97", form.current, {
      publicKey: "-QKPLhdZfJHcyu4KX",
    })
    .then(
      () => {
        Swal.fire({
          title: "Thank You",
          text: "Message Send",
          icon: "success",
        });

        setIsLoading(false);
        window.history.pushState({}, document.title, window.location.pathname);
      },
      () => {
        Swal.fire({
          title: "upps",
          text: "something error",
          icon: "error",
        });
      }
    );
};
