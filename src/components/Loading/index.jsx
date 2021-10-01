import "./styles.scss";
function Loading() {
  return (
    <div className="loading">
      {/* <div class="lds-hourglass"></div> */}
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
