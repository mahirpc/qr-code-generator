import QRCode from "react-qr-code";

const Qr = () => {
  return (
    <section className=" w-48 h-48 bg-white border-2 border-slate-950 my-10 rounded-md p-1">
        <QRCode 
            className="rounded-md"
            value="hi" 
            size={180} 
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            includeMargin={true}
            renderAs="svg"
        />
    </section>
  )
}

export default Qr
