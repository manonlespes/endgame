const Notice = ({
  noticeClass,
  message,
}: {
  noticeClass: string;
  message: JSX.Element | null;
}) => {
  return (
    <>
      <div className={`notice ${noticeClass}`}>{message}</div>
    </>
  );
};

export default Notice;
