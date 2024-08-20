import whatsapp from "../../assets/images/whatsapp_5968841.png";

const Whatsapp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=917063948704", "_blank");
  };

  return (
    <>
      <div onClick={handleWhatsAppClick}>
        <img
          sizes={720}
          height={1080}
          className="w-14"
          src={whatsapp}
          alt="whatsapp"
        />
      </div>
    </>
  );
};

export default Whatsapp;
