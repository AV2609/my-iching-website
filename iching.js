function tossCoin() {
    return Math.random() < 0.5 ? "heads" : "tails";
}

function generateLine() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (tossCoin() === "heads") {
            count += 1;
        }
    }
    return count === 0 ? 6 : count === 3 ? 9 : count % 2 === 0 ? 8 : 7;
}

function generateHexagram() {
    return Array.from({ length: 6 }, () => generateLine());
}

function getHexagramNumber(hexagram) {
    const binaryRepresentation = hexagram
        .slice()
        .reverse()
        .map(line => (line % 2 === 0 ? "0" : "1"))
        .join("");
    return parseInt(binaryRepresentation, 2) + 1;
}

function getHexagramInfo(hexagramNumber) {
    hexagram_info = [
        ["1. The Creative", "Represents the creative force, beginnings, and taking action."],
        ["2. The Receptive", "Symbolizes the receptive, nurturing energy and the importance of patience."],
        ["3. Difficulty at the Beginning", "Indicates challenges in starting new projects or endeavors."],
        ["4. Youthful Folly", "Represents immaturity, inexperience, and the need for guidance."],
        ["5. Waiting", "Emphasizes the importance of patience and trust in the natural order."],
        ["6. Conflict", "Indicates conflict or tension that requires a thoughtful and cautious approach."],
        ["7. The Army", "Symbolizes discipline, organization, and the need for a strong foundation."],
        ["8. Holding Together", "Represents unity, cooperation, and the importance of working with others."],
        ["9. The Taming Power of the Small", "Shows the power of restraint, consistency, and modesty."],
        ["10. Treading", "Indicates the importance of conduct and considering one's actions carefully."],
        ["11. Peace", "Signifies harmony, prosperity, and favorable conditions."],
        ["12. Standstill", "Represents stagnation, decline, and the need for introspection."],
        ["13. Fellowship with Men", "Symbolizes the importance of connections, collaboration, and community."],
        ["14. Possession in Great Measure", "Indicates abundance, success, and the ability to share with others."],
        ["15. Modesty", "Emphasizes humility, discretion, and the power of small actions."],
        ["16. Enthusiasm", "Represents motivation, inspiration, and the importance of shared goals."],
        ["17. Following", "Signifies the need for adaptability, trust, and accepting guidance."],
        ["18. Work on What Has Been Spoiled", "Indicates the importance of correcting mistakes and making amends."],
        ["19. Approach", "Represents progress, connection, and the importance of relationships."],
        ["20. Contemplation", "Emphasizes the need for reflection, understanding, and inner guidance."],
        ["21. Biting Through", "Signifies the importance of addressing problems and overcoming obstacles."],
        ["22. Grace", "Represents the appreciation of beauty, elegance, and the balance of form."],
        ["23. Splitting Apart", "Indicates decay, deterioration, and the need for letting go."],
        ["24. Return", "Symbolizes new beginnings, renewal, and the cycle of growth."],
        ["25. Innocence", "Represents sincerity, spontaneity, and trust in the natural order."],
        ["26. The Taming Power of the Great", "Signifies restraint, strength, and the power of inner stability."],
        ["27. Corners of the Mouth", "Emphasizes the importance of nourishment, both physical and spiritual."],
        ["28. Preponderance of the Great", "Indicates excess, imbalance, and the need for moderation."],
        ["29. The Abysmal", "Represents danger, challenges, and the importance of cautious action."],
        ["30. The Clinging", "Signifies clarity, insight, and the power of illumination."],
        ["31. Influence", "Represents attraction, connection, and the power of shared feelings."],
        ["32. Duration", "Emphasizes consistency, endurance, and the importance of stability."],
        ["33. Retreat", "Signifies the need for strategic withdrawal and conserving energy."],
        ["34. The Power of the Great", "Represents strength, confidence, and the ability to overcome obstacles."],
        ["35. Progress", "Indicates growth, development, and the rewards of hard work."],
        ["36. Darkening of the Light", "Symbolizes adversity, concealment, and the importance of inner strength."],
        ["37. The Family", "Represents the importance of relationships, support, and shared values."],
        ["38. Opposition", "Indicates conflict, diversity, and the potential for growth through tension."],
        ["39. Obstruction", "Signifies obstacles, setbacks, and the need for patience and reflection."],
        ["40. Deliverance", "Represents relief, liberation, and the resolution of difficulties."],
        ["41. Decrease", "Emphasizes the importance of letting go, sacrifice, and the power of restraint."],
        ["42. Increase", "Indicates growth, abundance, and the potential for positive change."],
        ["43. Breakthrough", "Signifies the need for decisive action, determination, and confrontation."],
        ["44. Coming to Meet", "Represents encounters, attraction, and the potential for temptation."],
        ["45. Gathering Together", "Symbolizes unity, collaboration, and the power of shared goals."],
        ["46. Pushing Upward", "Indicates steady growth, perseverance, and the rewards of patience."],
        ["47. Oppression", "Represents hardship, limitation, and the importance of inner resilience."],
        ["48. The Well", "Signifies the need for inner nourishment, renewal, and the constancy of change."],
        ["49. Revolution", "Indicates transformation, change, and the importance of adapting to new circumstances."],
        ["50. The Caldron", "Represents the potential for transformation, nourishment, and providing for others."],
        ["51. The Arousing", "Signifies sudden change, upheaval, and the importance of adaptability."],
        ["52. Keeping Still", "Emphasizes the need for stillness, introspection, and finding inner peace."],
        ["53. Development", "Indicates gradual progress, patience, and the importance of steady growth."],
        ["54. The Marrying Maiden", "Represents relationships, partnerships, and the potential for imbalance."],
        ["55. Abundance", "Signifies prosperity, fulfillment, and the importance of recognizing blessings."],
        ["56. The Wanderer", "Indicates the journey, adaptability, and the importance of finding one's path."],
        ["57. The Gentle", "Represents gentle influence, subtlety, and the power of persistence."],
        ["58. The Joyous", "Signifies happiness, connection, and the importance of shared joy."],
        ["59. Dispersion", "Indicates the need to dissolve obstacles, misunderstandings, and tension."],
        ["60. Limitation", "Emphasizes the importance of setting boundaries, discipline, and moderation."],
        ["61. Inner Truth", "Represents the power of intuition, honesty, and understanding."],
        ["62. Preponderance of the Small", "Signifies the importance of small actions, caution, and modesty."],
        ["63. After Completion", "Indicates the end of a cycle, the need for vigilance, and potential challenges."],
        ["64. Before Completion", "Represents the potential for success, uncertainty, and the importance of persistence."]
    ]
    // The hexagram_info array goes here (copy it from the previous response)
    return hexagram_info[hexagramNumber - 1];
}

function generateChangedHexagram(hexagram) {
    return hexagram.map(line => (line === 6 ? 7 : line === 9 ? 8 : line));
}
