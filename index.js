// code your solution here
function superbowlWin (record) {
    const winningRecord = record.find(item => item.result === 'W');
    return winningRecord;
}

function superbowlWin (record) {
    const winningRecord = record.find(item => item.result === 'W');
    return winningRecord ? winningRecord.year : undefined;
}
