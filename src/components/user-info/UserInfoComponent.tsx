const UserInfoComponent = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <svg width="18" height="18" fill="#555" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                </svg>
            </div>

            <span className="text-lg font-medium">Danil</span>
        </div>
    );
};

export default UserInfoComponent;