import emailJS from "@emailjs/browser";

const sendMail = (firstname, lastname, message, email, company) => {
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE;

  const templateMail = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    message: message,
    company: company,
  };

  emailJS.init(import.meta.env.VITE_EMAILJS_PUBLICKEY);

  emailJS
    .send(serviceId, templateId, templateMail)
    .then((res) => {
      //return

      return console.log("Response du service d'email");
    })
    .catch((err) => {
      console.log("Erreur du service d'email");
      if (err.status === 412) {
        return console.log("Email non reconnu, vérifiez votre e-mail");
      } else {
        return console.log(
          "Echec lors de l'envoi, recommencez ou contactez-moi via les réseaux sociaux"
        );
      }

      return err;
    });
};

export default sendMail;
