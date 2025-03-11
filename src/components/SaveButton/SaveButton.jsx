import { useOnlineStatus } from "../../hooks/useOnlineStatus.jsx/useOnlineStatus";

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("Save Clicked");
  }

  return (
    <>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
    </>
  );
}

export default SaveButton;
