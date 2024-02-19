import {
  House,
  Inbox,
  Telephone,
  TwitterX,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

function DefaultFooter() {
  return (
    <>
      <div className=" bg-gradient-to-r from-blue-400">
        <div className="container flex justify-between ">
          <div className="text-gray-100">
            <h2>Contact Us:</h2>
            <p className="flex items-center">
              <House />: Hanoi, Vietnam
            </p>
            <p className="flex items-center">
              <Inbox />: example@gamil.com
            </p>
            <p className="flex items-center">
              <Telephone />: 0123456789
            </p>
          </div>
          <div>
            <h2 className="text-gray-700">Connect with us: </h2>
            <div className="flex gap-2">
              <a href="https://twitter.com/" className="text-gray-700">
                <TwitterX />
              </a>
              <a href="https://facebook.com/"
              className="text-gray-700"
              >
                <Facebook />
              </a>
              <a href="https://instagram.com/" className="text-gray-700">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultFooter;
