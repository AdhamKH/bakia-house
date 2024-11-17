import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";
const CardGrid = ({ items }: any) => {
  return (
    <div className={styles.cardGrid}>
      {items.map((item: any) => (
        <Link
          key={item.id}
          href={{
            pathname: `/residential/single`,
            query: { id: `${item?.id}` },
          }}
        >
          <div className={styles.card}>
            <div className={styles.imgaContainer}>
              <Image
                fill
                src={item.image_path}
                alt={item.title}
                //   width={300} // Fixed width
                //   height={200} // Fixed height
                className={styles.cardImage}
              />
            </div>
            <h3 className={styles.cardTitle}>{item?.address}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CardGrid;
