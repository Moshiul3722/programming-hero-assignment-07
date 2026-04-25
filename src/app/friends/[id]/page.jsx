const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const FriendDetailPage = async ({ params }) => {
  const { id } = await params;
  const friends = await friendsPromise();
  const friend = friends.find((friend) => friend.id === parseInt(id));

  console.log(friend, "Friend Id");

  return (
    <div>
      <h2>Friend Details {id}</h2>
    </div>
  );
};

export default FriendDetailPage;
