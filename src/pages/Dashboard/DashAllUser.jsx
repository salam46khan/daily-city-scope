import useUser from "../../hook/useUser";
import AllUserItem from "./DashCompo/AllUserItem";

const DashAllUser = () => {
    const [user] = useUser();
    return (
        <div>
            <h2 className='text-3xl'>Dash All User</h2>
            <hr />
            <p className="text-xl">Total User: {user.length}</p>
            <div className="p-3">
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        user.map(item => <AllUserItem item={item} key={item._id}></AllUserItem>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default DashAllUser;