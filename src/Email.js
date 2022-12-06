import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export default function Email() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "190vw",
        height: "100vh",
        position: "fixed",
        color: "teal",
      }}
    >
      <p
        style={{
          transform: "rotate(90deg)",
          margin: "100px",
          fontSize: "20px",
        }}
      >
        alexvan73@yahoo.com
      </p>
      <div
        class="line-1"
        style={{ height: "1px", background: "black", color: "teal" }}
      ></div>
    </nav>
  );
}
