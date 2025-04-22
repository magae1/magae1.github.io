export default function TalkPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center">magae talk 🗨️</h1>
      </div>
      <div className="lg:pt-20 flex justify-center lg:items-center">
        <div className="my-10 lg:my-0">
          <div className="mockup-phone mx-auto">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
