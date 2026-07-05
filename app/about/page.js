import Link from "next/link";

export default function AboutPage() {
  const identityItems = [
    {
      letter: "อุ",
      title: "อุฏฐานสัมปทา (ขยัน)",
      description: "มีความขยันหมั่นเพียรในการศึกษาเล่าเรียน การฝึกทักษะวิชาชีพ และการทำงานอย่างมุ่งมั่น",
      color: "from-blue-500 to-indigo-600",
    },
    {
      letter: "อา",
      title: "อารักขสัมปทา (เก็บรักษา)",
      description: "รู้จักเก็บหอมรอมริบ รักษาทรัพย์สินของตนเองและส่วนรวม ตลอดจนรักษาความดีงาม",
      color: "from-sky-400 to-blue-600",
    },
    {
      letter: "ก",
      title: "กัลยาณมิตตา (คบมิตรดี)",
      description: "คบหาเพื่อนและกัลยาณมิตรที่ดี คอยตักเตือนและเกื้อหนุนกันไปในทางที่เจริญก้าวหน้า",
      color: "from-emerald-400 to-teal-600",
    },
    {
      letter: "ส",
      title: "สมชีวิตา (พอเพียง)",
      description: "รู้จักใช้จ่ายทรัพย์ตามกำลังที่หาได้ ใช้ชีวิตอยู่อย่างเรียบง่าย มีเหตุผลตามหลักเศรษฐกิจพอเพียง",
      color: "from-amber-400 to-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2 block">About College</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tcc-deep mb-4">เกี่ยวกับวิทยาลัย</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-light">
          ประวัติความเป็นมา ปรัชญา ค่านิยม และอัตลักษณ์สำคัญของวิทยาลัยพณิชยการธนบุรี
        </p>
      </section>

      {/* History Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 relative bg-gradient-to-br from-tcc-deep to-tcc-blue text-white p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative z-10">
              <span className="text-tcc-gold text-xs font-extrabold uppercase tracking-wider block mb-2">History Since 1957</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">ประวัติความเป็นมา</h2>
              <p className="text-slate-200 text-sm leading-relaxed mb-6 font-light">
                วิทยาลัยพณิชยการธนบุรี สถาบันการอาชีวศึกษาชั้นนำ ก่อตั้งขึ้นเมื่อวันที่ 23 กุมภาพันธ์ พ.ศ. 2500 โดยเริ่มต้นจากกุศลเจตนาของ "พระมหาระมัด โชติปาโล" เจ้าอาวาสวัดบางแวกในขณะนั้น
              </p>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                หลวงพ่อระมัดได้เล็งเห็นความสำคัญของการศึกษาของเยาวชนฝั่งธนบุรี จึงได้มอบที่ดินและสร้างอาคารไม้ให้แก่กรมอาชีวศึกษาเพื่อจัดตั้งโรงเรียนพณิชยการธนบุรี ก่อนจะได้รับการยกฐานะเป็น "วิทยาลัยพณิชยการธนบุรี" ในปี พ.ศ. 2514
              </p>
            </div>
            
            {/* Luang Pho Ramad Tribute Card */}
            <div className="relative z-10 mt-12 bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-tcc-gold flex items-center justify-center font-bold text-slate-900 text-xs">
                  TCC
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">พระมหาระมัด โชติปาโล</h4>
                  <p className="text-xs text-tcc-gold">ผู้ก่อตั้งและผู้อุปถัมภ์สถาบัน</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-800 mb-6">พัฒนาการสู่อนาคต</h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-tcc-blue flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">จุดเริ่มต้น (พ.ศ. 2500)</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    ก่อตั้งเป็น "โรงเรียนพณิชยการธนบุรี" เปิดสอนวิชาพณิชยการระดับพื้นฐานเพื่อยกระดับทักษะเยาวชนในชุมชนฝั่งธนบุรีและพื้นที่ใกล้เคียง
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-tcc-blue flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">ยกระดับสู่ฐานะวิทยาลัย (พ.ศ. 2514)</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    ยกระดับฐานะเปิดสอนระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) เพื่อขยายโอกาสทางการศึกษาด้านธุรกิจให้แก่เยาวชนไทยในระดับกว้างขวางขึ้น
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-tcc-blue flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">ปัจจุบันและอนาคต (สู่มาตรฐานสากล)</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    เปิดหลักสูตร ปวช. และ ปวส. ที่ทันสมัย รวมถึงระดับปริญญาตรีสายเทคโนโลยี (ทล.บ.) ร่วมมือทวิภาคีกับบริษัทระดับประเทศ เน้นเทคโนโลยีดิจิทัลและการเป็นผู้ประกอบการยุคใหม่
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Philosophy Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-tcc-blue flex items-center justify-center mb-6 shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-tcc-deep mb-4">ปรัชญาวิทยาลัย</h3>
            <p className="text-xl font-bold text-slate-700 italic leading-relaxed mb-4">
              "ความรู้คู่ความดี ตรงต่อเวลา รู้หน้าที่ มีความรับผิดชอบ"
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              มุ่งเน้นให้นักศึกษามีความเป็นเลิศในด้านทักษะความรู้ทางวิชาชีพ ควบคู่กับการประพฤติตนเป็นคนดีในสังคม รักษาความซื่อตรง ทำหน้าที่ตนเอง และมีความรับผิดชอบต่อหน้าที่ส่วนรวม
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-tcc-gold flex items-center justify-center mb-6 shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-tcc-deep mb-4">วิสัยทัศน์ (Vision)</h3>
            <p className="text-xl font-bold text-slate-700 leading-relaxed mb-4">
              "เป็นองค์กรแห่งการสร้างภูมิปัญญาวิชาชีพด้านบริหารธุรกิจและการท่องเที่ยวสู่มาตรฐานสากล"
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              มุ่งสู่การเป็นศูนย์กลางความเป็นเลิศทางวิชาชีพ พัฒนาหลักสูตรการศึกษาและทรัพยากรการเรียนรู้เพื่อสนับสนุนขีดความสามารถการแข่งขันของผู้เรียนในระดับนานาชาติ
            </p>
          </div>
        </div>
      </section>

      {/* Identity (อุ อา ก ส) Section */}
      <section className="bg-gradient-to-br from-[#0f2d59] to-[#0066cc] text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-tcc-gold text-sm font-bold uppercase tracking-wider mb-2">Unique Identity</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white relative pb-4">
              อัตลักษณ์วิทยาลัย: คาถาหัวใจเศรษฐี (อุ อา ก ส)
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-tcc-gold rounded-full"></span>
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mt-4 max-w-xl font-light">
              หลักคุณธรรมทางพระพุทธศาสนาในการดำเนินชีวิตและสร้างฐานะความเจริญก้าวหน้าแก่เยาวชนพณิชยการธนบุรี
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {identityItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center text-center hover:bg-white/15 hover:scale-105 transition-all duration-300"
              >
                {/* Letter Circle */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-extrabold text-3xl shadow-md mb-6 animate-pulse`} style={{ animationDuration: "3s" }}>
                  {item.letter}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Emblem & Colors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2">Identity Details</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-tcc-deep relative pb-4">
            สัญลักษณ์และสีประจำวิทยาลัย
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-tcc-gold rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Emblem 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-blue-50 text-tcc-blue rounded-full flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-3">เรือใบและปีกนก</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              หมายถึง การพาณิชย์และการทำธุรกิจโดยทางน้ำ (เรือใบ) และทางอากาศ/ทางบก (ปีกนก) ซึ่งผู้ทำหน้าที่ต้องมีความซื่อสัตย์สุจริต มีจรรยาบรรณวิชาชีพและเปี่ยมล้นไปด้วยจริยธรรมคุณธรรม
            </p>
          </div>

          {/* Emblem 2 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-amber-50 text-tcc-gold rounded-full flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 animate-spin" style={{ animationDuration: "12s" }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M12 12l7 7M12 12l-7-7M12 12l7-7M12 12L5 19" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-3">วงล้อธรรมจักรและเปลวเทียน</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              หมายถึง การใช้การศึกษาความรู้ในการขับเคลื่อนทักษะอย่างยอดเยี่ยม (ธรรมจักร) และการนำคุณธรรมความดีงามส่องสว่างนำวิถีชีวิตและการทำงานให้ประสบความสำเร็จ (เปลวเทียน)
            </p>
          </div>

          {/* Colors Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            {/* Color circles */}
            <div className="flex -space-x-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-tcc-blue border-4 border-white shadow-md z-10 flex items-center justify-center font-bold text-xs text-white">ฟ้า</div>
              <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-100 shadow-md z-0 flex items-center justify-center font-bold text-xs text-slate-400">ขาว</div>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-3">สีฟ้า - ขาว</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              สีประจำวิทยาลัยคือ <b>สีฟ้าและสีขาว</b> ซึ่งสื่อความหมายดังนี้:<br />
              <span className="text-tcc-blue font-semibold">สีฟ้า</span> หมายถึง ความรุ่งเรือง มั่นคง และเปี่ยมล้นด้วยปัญญาความสามารถด้านบริหารธุรกิจ<br />
              <span className="text-slate-400 font-semibold">สีขาว</span> หมายถึง ศีลธรรม คุณธรรม และความสุจริตโปร่งใสในการประกอบอาชีพ
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
