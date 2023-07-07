import styles from "./PrimaryButton.module.css";

interface Props {
    title: string;
}

const PrimaryButton = (props: Props) => {
  return <button className={styles.main}>{props.title.toUpperCase()}</button>;
};

export default PrimaryButton;
