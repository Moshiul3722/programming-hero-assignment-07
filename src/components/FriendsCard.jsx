import Image from "next/image";

const FriendsCard = ({ friendInfo }) => {
  const { name, picture, days_since_contact, tags, status } = friendInfo;
  console.log(friendInfo);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <Image
          className="rounded-full"
          src={picture}
          alt={name}
          width={80}
          height={80}
        ></Image>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{days_since_contact}d ago</p>
        <span className="flex gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#CBFADB] uppercase px-3 py-1 text-[#244D3F] text-[12px] rounded-full"
            >
              {tag}
            </div>
          ))}
        </span>
        {status === "overdue" ? (
          <div className="text-white bg-[#EF4444] px-2 rounded-full">
            Overdue
          </div>
        ) : status === "almost due" ? (
          <div className="text-white bg-[#EFAD44] px-2 rounded-full">
            Almost Due
          </div>
        ) : (
          <div className="text-white bg-[#244D3F] px-2 rounded-full">
            On-Track
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsCard;
