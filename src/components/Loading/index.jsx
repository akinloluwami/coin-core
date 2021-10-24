import "./styles.scss";
function Loading() {
  return (
    <div className="loading">
      {/* <div class="lds-hourglass"></div> */}
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
