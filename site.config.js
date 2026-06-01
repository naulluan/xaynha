/* ============================================================
   DANH MỤC CÁC TRANG (PATH) CỦA SITE house.luannguyen.work
   ------------------------------------------------------------
   Muốn thêm 1 path mới trong tương lai:
     1. Tạo thư mục mới ở gốc repo, ví dụ:  vat-lieu/
     2. Đặt file trang vào đó với tên:      vat-lieu/index.html
     3. Thêm 1 mục vào mảng PAGES dưới đây.
   Trang chủ ( / ) sẽ tự động hiện thẻ cho path mới.
   ============================================================ */
window.PAGES = [
  {
    path: "dutoan",
    title: "Dự toán xây nhà",
    desc: "Bảng tính khái toán vật tư, tiền công, checklist chống phát sinh. Số liệu tự lưu vào trình duyệt.",
    icon: "🏗️",
    accent: "#0f766e"
  },
  {
    path: "3d",
    title: "Mô hình 3D biệt thự",
    desc: "Mô hình 3D biệt thự 2 tầng xem trực tiếp trên trình duyệt.",
    icon: "🏛️",
    accent: "#2f4a8c"
  }
  // Thêm path mới ở đây, ví dụ:
  // { path: "vat-lieu", title: "...", desc: "...", icon: "📦", accent: "#b8860b" }
];
