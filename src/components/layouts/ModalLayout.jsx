import { useEffect } from "react";

const ModalLayout = (props{modal, toggle,label}) => {
  useEffect(() => {
    if (props.modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [props.modal]);

  //   <ModalLayout
  //   toggle={toggleModal}   //!toggleStatus
  //   modal={modal}          //!status
  //   label="Ré-initialisation en cours ..."
  // ></ModalLayout>

  return (
    <>
      {props.modal && (
        <>
          <div className="modal">
            <div className="overlay" onClick={(e) => props.toggle(e)}></div>
            <div className="modal__content">
              <h2
                className={
                  "modalContent__label modalContent__label--red"
                }
              >
                {props.label}
              </h2>
              <div className="scrollContent">{props.children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalLayout;
