import DetailPageContent from "@/components/DetailPageContent";

const FriendDetailPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="w-7xl mx-auto py-20">
      <DetailPageContent id={id}></DetailPageContent>
    </div>
  );
};

export default FriendDetailPage;
