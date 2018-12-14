import SparkMD5 from './speak-md5'

export function md5 (file) {
  return new Promise((resolve, reject) => {
    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        chunkSize = 2097152,                             // Read in chunks of 2MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();

    fileReader.onload = function (e) {
        // console.log('read chunk nr', currentChunk + 1, 'of', chunks);
        spark.append(e.target.result);                  // Append array buffer
        currentChunk++;

        if (currentChunk < chunks) {
            loadNext();
        } else {
            resolve(spark.end())
        }
    };

    fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
        reject('hash')
    };

    function loadNext() {
        var start = currentChunk * chunkSize,
            end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
  })
}