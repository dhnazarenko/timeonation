import React from 'react';
import Modal from 'react-modal';
import Button from '../Button/Button';
import styles from './VideoButton.module.css';

type VideoButtonProps = {
  icon: React.SVGProps<SVGSVGElement>;
  buttonText: string;
  variant?: 'primary' | 'secondary';
};

function VideoButton({
  icon,
  buttonText,
  variant,
}: VideoButtonProps): JSX.Element {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button
        onClick={openModal}
        className={
          variant
            ? `${styles[`button--${variant}`]} ${styles.button}`
            : styles.button
        }
      >
        {icon}
        {buttonText}
      </button>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video"
      >
        <h1 className={styles.modal__headline}>Danke für deine Zeit</h1>
        <p className={styles.modal__information}>
          Das Video muss komplett durchlaufen um einen Spende zu generieren!
        </p>
        <iframe
          className={styles.modal__iframe}
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/uXGZPFlU1j4?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <Button onClick={closeModal}>close</Button>
      </Modal>
    </>
  );
}

export default VideoButton;
