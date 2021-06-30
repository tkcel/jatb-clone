import styles from './Header.module.css'

// interface HeaderProps {
//   text?: string
// }

export const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ロゴ</div>
      <div className={styles.headerWrapper}>
        <div className={styles.headerItemNormalWrapper}>私たちについて</div>
        <div className={styles.headerItemNormalWrapper}>私たちについて</div>
        <div className={styles.headerItemNormalWrapper}>私たちについて</div>
        <div className={styles.headerItemNormalWrapper}>私たちについて</div>
        <div className={styles.headerItemBlueWrapper}>私たちについて</div>
        <div className={styles.headerItemLightBlueWrapper}>私たちについて</div>
      </div>
    </div>
  )
}
