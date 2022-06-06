const qs = require("qs");
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const GarageComments = ({ findMechId, jwt }) => {
  const { data: session } = useSession();
  const limit = 5;
  const [recentComment, setRecentComment] = useState({});
  const [comments, setComments] = useState([]);
  const [textareaComment, setTextareaComment] = useState("");
  const [start, setStart] = useState(0);
  const query = qs.stringify(
    {
      pagination: {
        start: start,
        limit: limit,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      const commentData = await fetch(
        `https://nearmech-backend.herokuapp.com/api/garages/${findMechId}/comment?${query}`
      ).then((res) => res.json());
      setComments(commentData);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, recentComment]);

  const handleCommentPage = (e) => {
    if (e.target.name === "next") {
      if (comments.length < limit) return;
      setStart(start + limit);
    } else {
      if (start - limit < 0) return;
      setStart(start - limit);
    }
  };

  const postComment = async (e) => {
    if (!session) {
      alert("You must sign in to comment");
    }
    e.preventDefault();
    if (textareaComment.length < 15) {
      alert("Comment should be atleast 15 characters long");
      return;
    }

    const comment_response = await fetch(
      `https://nearmech-backend.herokuapp.com/api/garages/${findMechId}/comment`,
      {
        method: "post",
        headers: new Headers({
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        }),
        body: `{
        "data":{
                      "comment":"${textareaComment}"
                  }
              }`,
      }
    ).then((res) => {
      return res.json();
    });
    setRecentComment(comment_response);
  };

  return (
    <div className="rounded-sm shadow-md py-2 px-4 my-1">
      <div className="px-2 rounded-md bg-gray-200 shadow-md flex flex-col">
        <h3 className="font-bold text-lg py-2">Comments</h3>
        <textarea
          className="resize-none rounded-md border-2 w-full"
          maxLength={150}
          onChange={(e) => setTextareaComment(e.target.value)}
        ></textarea>
        <button
          onClick={postComment}
          className="my-2 bg-red-500 hover:bg-red-800 text-white font-bold py-1 self-end px-4 border-b-4 border-red-700 hover:border-red-900 rounded"
        >
          Post
        </button>
      </div>
      <div className="p-2 flex flex-col">
        {comments.length === 0 ? (
          <div className="p-4 text-sm text-gray-500 text-center">
            No comments yet
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b-2 flex flex-col py-2">
              <div className="font-semibold">{comment.comment}</div>
              <div className="text-sm text-gray-700 self-end px-2">
                -{comment.user.username}
              </div>
            </div>
          ))
        )}
        <div className="self-end mt-2 flex gap-2">
          <button
            name="prev"
            onClick={handleCommentPage}
            className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-1 px-4 border-b-4 border-gray-700 hover:border-gray-900 rounded"
          >
            prev
          </button>
          <button
            name="next"
            onClick={handleCommentPage}
            className=" bg-gray-500 hover:bg-gray-800 text-white font-bold py-1 px-4 border-b-4 border-gray-700 hover:border-gray-900 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GarageComments;
