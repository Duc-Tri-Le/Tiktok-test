import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="contianer">
        <dic className="content">{children}</dic>
      </div>
    </div>
  );
}

export default HeaderOnly;
