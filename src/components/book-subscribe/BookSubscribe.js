import { useState } from "react";
import Button from "../button/Button";
import Modal from "react-bootstrap/Modal";

import emailImg from "../images/subscribe/email.png";

import styles from "./bookSubscribe.module.css";

const BookSubscribe = () => {
  const [values, setValues] = useState({ email: "" });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <div className={styles.subscribe__container}>
        <div className={styles.subscribe__content}>
          <img src={emailImg} alt="email" className={styles.subscribe__img} />
          <p className={styles.subscribe__text}>
            Learn about new offers by <br />
            joining our newsletter
          </p>
        </div>
        <form className={styles.subsribe__form} onSubmit={submitForm}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            className={styles.subscribe__input}
            onChange={handleChange}
          />
          <Button
            children={"Sign Up"}
            className={styles.subscribe__btn}
            onClick={handleShow}
          />
        </form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title className={styles.modal__title}>
              Thank you for Subscription!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modal__body}>
            Once there are new offers we'll get in touch with you via{" "}
            {values.email}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default BookSubscribe;
