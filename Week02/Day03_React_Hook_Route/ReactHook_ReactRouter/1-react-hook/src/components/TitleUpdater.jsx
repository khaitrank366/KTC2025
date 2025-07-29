import { useState ,useEffect} from "react";

export default function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Đã bấm ${count} lần`;
    console.log("useEffect");
  }); // Chạy lại mỗi khi count đổi

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
