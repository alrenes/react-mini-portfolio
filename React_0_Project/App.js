function App() {
    const [friends, setFriends] = React.useState([
        { name: "A", age: 10, photo: "https://i.pravatar.cc/100?img=1" },
        { name: "B", age: 12, photo: "https://i.pravatar.cc/100?img=2" },
        { name: "C", age: 11, photo: "https://i.pravatar.cc/100?img=3" },
    ]);

    const [greetMsg, setGreetMsg] = React.useState("");
    const [newFriendName, setNewFriendName] = React.useState("");
    const [newFriendAge, setNewFriendAge] = React.useState("");

    const handleGreet = (name) => setGreetMsg(`Halo, ${name}!`);
    const handleReset = () => setGreetMsg("");

    const handleAddFriend = () => {
        if (newFriendName.trim() === "" || newFriendAge.trim() === "") return;
        const newFriend = {
            name: newFriendName,
            age: parseInt(newFriendAge),
            photo: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`
        };
        setFriends([...friends, newFriend]);
        setNewFriendName("");
        setNewFriendAge("");
    };

    const handleDeleteFriend = (index) => {
        setFriends(friends.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>ReactJS Mini Portfolio</h1>
            
            <div className="input-section">
                <input type="text" placeholder="Nama teman" value={newFriendName} onChange={e => setNewFriendName(e.target.value)} />
                <input type="number" placeholder="Umur teman" value={newFriendAge} onChange={e => setNewFriendAge(e.target.value)} />
                <button onClick={handleAddFriend}>Tambah Teman</button>
            </div>

            <div className="card-container">
                {friends.map((friend, index) => (
                    <div className="card" key={index}>
                        <img src={friend.photo} alt={friend.name} className="photo" />
                        <h2>{friend.name}</h2>
                        <p>Umur: {friend.age} tahun</p>
                        <button onClick={() => handleGreet(friend.name)}>Greet</button>
                        <button onClick={() => handleDeleteFriend(index)}>Hapus</button>
                    </div>
                ))}
            </div>

            <p className="greet-msg">{greetMsg}</p>
            <button className="reset-btn" onClick={handleReset}>Reset Greet</button>
        </div>
    );
}
