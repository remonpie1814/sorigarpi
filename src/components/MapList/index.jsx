const MapList = ({ list, ComponentName, className }) => {
  return (
    <>
      {list.map((item, index) => {
        return <ComponentName className={className} {...item} />;
      })}
    </>
  );
};

export { MapList };
