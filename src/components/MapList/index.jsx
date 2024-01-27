const MapList = ({ list, ComponentName, className, onClickRow }) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <ComponentName
            className={className}
            {...item}
            onClick={() => {
              onClickRow(item);
            }}
          />
        );
      })}
    </>
  );
};
function doNothing() {}

MapList.defaultProps = {
  onClickRow: doNothing,
};

export { MapList };
