const e=JSON.parse(`{"key":"v-39fc4247","path":"/zh/v8/files.html","title":"files - \u6587\u4EF6\u7CFB\u7EDF","lang":"zh-CN","frontmatter":{"summary":"files - \u6587\u4EF6\u7CFB\u7EDF \\" Stability: 2 - Stable\\" files\u6A21\u5757\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u6587\u4EF6\u5904\u7406\uFF0C\u5305\u62EC\u6587\u4EF6\u8BFB\u5199\u3001\u79FB\u52A8\u3001\u590D\u5236\u3001\u5220\u6389\u7B49\u3002 \u4E00\u6B21\u6027\u7684\u6587\u4EF6\u8BFB\u5199\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528files.read(), files.write(), files.append()\u7B49\u65B9\u4FBF\u7684\u51FD\u6570\uFF0C\u4F46\u5982\u679C\u9700\u8981\u9891\u7E41\u8BFB\u5199\u6216\u968F\u673A\u8BFB\u5199\uFF0C\u5219\u4F7F\u7528open()\u51FD\u6570\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u5BF9\u8C61\u6765\u64CD\u4F5C\u6587\u4EF6\uFF0C","head":[["meta",{"property":"og:url","content":"https://pro.autojs.org/docs/zh/v8/files.html"}],["meta",{"property":"og:site_name","content":"Auto.js Pro\u6587\u6863"}],["meta",{"property":"og:title","content":"files - \u6587\u4EF6\u7CFB\u7EDF"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-22T07:36:15.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-10-22T07:36:15.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://pro.autojs.org/docs/en/zh/v8/files.html"}]]},"excerpt":"","headers":[{"level":2,"title":"files.isFile(path)","slug":"files-isfile-path","link":"#files-isfile-path","children":[]},{"level":2,"title":"files.isDir(path)","slug":"files-isdir-path","link":"#files-isdir-path","children":[]},{"level":2,"title":"files.isEmptyDir(path)","slug":"files-isemptydir-path","link":"#files-isemptydir-path","children":[]},{"level":2,"title":"files.join(parent, child)","slug":"files-join-parent-child","link":"#files-join-parent-child","children":[]},{"level":2,"title":"files.create(path)","slug":"files-create-path","link":"#files-create-path","children":[]},{"level":2,"title":"files.createWithDirs(path)","slug":"files-createwithdirs-path","link":"#files-createwithdirs-path","children":[]},{"level":2,"title":"files.exists(path)","slug":"files-exists-path","link":"#files-exists-path","children":[]},{"level":2,"title":"files.ensureDir(path)","slug":"files-ensuredir-path","link":"#files-ensuredir-path","children":[]},{"level":2,"title":"files.read(path[, encoding = \\"utf-8\\"])","slug":"files-read-path-encoding-utf-8","link":"#files-read-path-encoding-utf-8","children":[]},{"level":2,"title":"files.readBytes(path)","slug":"files-readbytes-path","link":"#files-readbytes-path","children":[]},{"level":2,"title":"files.write(path, text[, encoding = \\"utf-8\\"])","slug":"files-write-path-text-encoding-utf-8","link":"#files-write-path-text-encoding-utf-8","children":[]},{"level":2,"title":"files.writeBytes(path, bytes)","slug":"files-writebytes-path-bytes","link":"#files-writebytes-path-bytes","children":[]},{"level":2,"title":"files.append(path, text[, encoding = 'utf-8'])","slug":"files-append-path-text-encoding-utf-8","link":"#files-append-path-text-encoding-utf-8","children":[]},{"level":2,"title":"files.appendBytes(path, text[, encoding = 'utf-8'])","slug":"files-appendbytes-path-text-encoding-utf-8","link":"#files-appendbytes-path-text-encoding-utf-8","children":[]},{"level":2,"title":"files.copy(fromPath, toPath)","slug":"files-copy-frompath-topath","link":"#files-copy-frompath-topath","children":[]},{"level":2,"title":"files.move(fromPath, toPath)","slug":"files-move-frompath-topath","link":"#files-move-frompath-topath","children":[]},{"level":2,"title":"files.rename(path, newName)","slug":"files-rename-path-newname","link":"#files-rename-path-newname","children":[]},{"level":2,"title":"files.renameWithoutExtension(path, newName)","slug":"files-renamewithoutextension-path-newname","link":"#files-renamewithoutextension-path-newname","children":[]},{"level":2,"title":"files.getName(path)","slug":"files-getname-path","link":"#files-getname-path","children":[]},{"level":2,"title":"files.getNameWithoutExtension(path)","slug":"files-getnamewithoutextension-path","link":"#files-getnamewithoutextension-path","children":[]},{"level":2,"title":"files.getExtension(path)","slug":"files-getextension-path","link":"#files-getextension-path","children":[]},{"level":2,"title":"files.remove(path)","slug":"files-remove-path","link":"#files-remove-path","children":[]},{"level":2,"title":"files.removeDir(path)","slug":"files-removedir-path","link":"#files-removedir-path","children":[]},{"level":2,"title":"files.getSdcardPath()","slug":"files-getsdcardpath","link":"#files-getsdcardpath","children":[]},{"level":2,"title":"files.cwd()","slug":"files-cwd","link":"#files-cwd","children":[]},{"level":2,"title":"files.path(relativePath)","slug":"files-path-relativepath","link":"#files-path-relativepath","children":[]},{"level":2,"title":"files.listDir(path[, filter])","slug":"files-listdir-path-filter","link":"#files-listdir-path-filter","children":[]},{"level":2,"title":"open(path[, mode = \\"r\\", encoding = \\"utf-8\\", bufferSize = 8192])","slug":"open-path-mode-r-encoding-utf-8-buffersize-8192","link":"#open-path-mode-r-encoding-utf-8-buffersize-8192","children":[]},{"level":2,"title":"ReadableTextFile.read()","slug":"readabletextfile-read","link":"#readabletextfile-read","children":[]},{"level":2,"title":"ReadableTextFile.read(maxCount)","slug":"readabletextfile-read-maxcount","link":"#readabletextfile-read-maxcount","children":[]},{"level":2,"title":"ReadableTextFile.readline()","slug":"readabletextfile-readline","link":"#readabletextfile-readline","children":[]},{"level":2,"title":"ReadableTextFile.readlines()","slug":"readabletextfile-readlines","link":"#readabletextfile-readlines","children":[]},{"level":2,"title":"close()","slug":"close","link":"#close","children":[]},{"level":2,"title":"PWritableTextFile.write(text)","slug":"pwritabletextfile-write-text","link":"#pwritabletextfile-write-text","children":[]},{"level":2,"title":"PWritableTextFile.writeline(line)","slug":"pwritabletextfile-writeline-line","link":"#pwritabletextfile-writeline-line","children":[]},{"level":2,"title":"PWritableTextFile.writelines(lines)","slug":"pwritabletextfile-writelines-lines","link":"#pwritabletextfile-writelines-lines","children":[]},{"level":2,"title":"PWritableTextFile.flush()","slug":"pwritabletextfile-flush","link":"#pwritabletextfile-flush","children":[]},{"level":2,"title":"PWritableTextFile.close()","slug":"pwritabletextfile-close","link":"#pwritabletextfile-close","children":[]}],"git":{"createdTime":1666424175000,"updatedTime":1666424175000,"contributors":[{"name":"hyb1996","email":"946994919@qq.com","commits":1}]},"readingTime":{"minutes":6.99,"words":2098},"filePathRelative":"zh/v8/files.md","localizedDate":"2022\u5E7410\u670822\u65E5"}`);export{e as data};