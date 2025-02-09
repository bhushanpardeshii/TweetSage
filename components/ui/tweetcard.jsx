import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";

const TweetCard = ({ user, tweet, time }) => {
    return (
        <Card className="w-full max-w-xl p-4 shadow-md border rounded-lg">
            <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12" src={user.avatar} alt={user.name} />
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="font-bold text-gray-900">{user.name}</span>
                            <span className="text-gray-500 ml-2">@{user.username} · {time}</span>
                        </div>
                    </div>
                    <p className="text-gray-800 mt-2">{tweet}</p>
                    <div className="flex justify-between mt-3 text-gray-500 text-sm">
                        <button className="flex items-center gap-1 hover:text-blue-500">
                            <MessageCircle size={16} /> 12
                        </button>
                        <button className="flex items-center gap-1 hover:text-green-500">
                            <Repeat2 size={16} /> 8
                        </button>
                        <button className="flex items-center gap-1 hover:text-red-500">
                            <Heart size={16} /> 24
                        </button>
                        <button className="flex items-center gap-1 hover:text-gray-700">
                            <Share size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default TweetCard;
