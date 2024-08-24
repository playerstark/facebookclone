class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>Facebook Clone</h1>
                <input type="text" placeholder="Search Facebook" />
            </div>
        );
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
            <ul>
                <h2>Profile</h2>
                <h2>Friends</h2>
                <h2>Messenger</h2>
                <h2>Groups</h2>
                <h2>Events</h2>
            </ul>
            </div>
        );
    }
}

class Feed extends React.Component {
    render() {
        return (
            <div className="feed">
                <h2>News Feed</h2>
            </div>
        );
    }
}

class Widgets extends React.Component {
    render() {
        return (
            <div className="widgets">
                <h2>Sponsored</h2>
                <p>Advertisements or widgets here.</p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

