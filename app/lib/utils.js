// แปลงภาษาของหมวดหมู่ข่าวสาร
export function getCategoryName(category) {
  const categories = {
    admission: 'ข่าวรับสมัคร',
    academic: 'ข่าววิชาการ',
    activity: 'ข่าวกิจกรรม'
  };
  return categories[category] || 'ข่าวประชาสัมพันธ์';
}

// แปลงรูปแบบวันเวลาของระบบเป็นรูปแบบไทย เช่น 5 ก.ค. 2569
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
