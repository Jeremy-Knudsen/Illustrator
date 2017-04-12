// Run this script to rename all the artboards to prepend the number of the artboard to the existing artboard name,
// which is useful for exporting a series of PNGs, in which the order must be maintained
//
// Use it freely!
// Jeremy Knudsen ( jeremyknudsen@outlook.com )

function renameArtboards() {
    var docRef = app.activeDocument,
        aB = docRef.artboards,
        i = aB.length,
        aBPrefix = "";
    for (i; i--;) {
        if (i < 9) {
            aBPrefix = "0" + (i + 1) + "_";
        } else {
            aBPrefix = (i + 1) + "_";
        }
        aB[i].name = aBPrefix + aB[i].name.replace(/^(\d*_)+/, "");
    }
}
renameArtboards();
