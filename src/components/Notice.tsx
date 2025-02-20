const Notice = ({
  noticeClass,
  message,
}: {
  noticeClass: string;
  message: JSX.Element | null;
}) => {
  return (
    <>
      <div aria-live="polite" role="status" className={`notice ${noticeClass}`}>
        {message}
      </div>
    </>
  );
};

export default Notice;
