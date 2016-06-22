module.exports.firstReply = [
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54328917',
        'id': 54328917,
        'diff_hunk': '@@ -0,0 +1,6 @@\n+var commonWords = [\'без\', \'в\', \'до\', \'для\', \'за\', \'из\', \'к\', \'как\', \'на\', \'над\', \'о\', \'об\', \'от\',',
        'path': 'commonWords.js',
        'position': null,
        'original_position': 1,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Наименование скорее всего должно быть не "Общие слова", верно?\r\nЛучше всего раскидывать файлы логически по директориям. Так как это вспомогательный файл, его лучше хранить, например, в /lib/. Пока файлов в корне, как сейчас, немного -- это дополнительная фича, но когда их больше -- это упрощает жизнь.',
        'created_at': '2016-02-27T05:38:32Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54328917',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54328917'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54328917'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329049',
        'id': 54329049,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {',
        'path': 'counter.js',
        'position': null,
        'original_position': 14,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'jsdoc?',
        'created_at': '2016-02-27T05:53:58Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329049',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329049'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329049'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329078',
        'id': 54329078,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов',
        'path': 'counter.js',
        'position': null,
        'original_position': 33,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Можно вынести в переменные',
        'created_at': '2016-02-27T05:56:58Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329078',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329078'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329078'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329083',
        'id': 54329083,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 44,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'ауч',
        'created_at': '2016-02-27T05:57:34Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329083',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329083'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329083'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329161',
        'id': 54329161,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 83,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Стоит вынести вверх. И что будет, если нет такого файла, м?',
        'created_at': '2016-02-27T06:04:22Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329161',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329161'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329161'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329244',
        'id': 54329244,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);\n+                    reject();\n+                }\n+            }\n+        );\n+    });\n+};\n+\n+var fetchFiles = function (stream) {\n+    var promises = [];\n+    for (var i = 1; i <= 10; i++) {\n+        promises[i] = fetchFile(\'https://api.github.com/repos/urfu-2015/verstka-tasks-\' +\n+            i + \'/readme\', stream);\n+    }\n+    Promise.all(promises).then(function () {\n+        stream.end();\n+    });\n+};\n+\n+var count = function (word, callback) {\n+    var stem = natural.PorterStemmerRu.stem(word);\n+    var transform = createRemoveMarkdownTransform();',
        'path': 'counter.js',
        'position': null,
        'original_position': 123,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Идентичные вызовы в функции ниже.',
        'created_at': '2016-02-27T06:12:05Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329244',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329244'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329244'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331399',
        'id': 54331399,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 44,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'Victoria-Vladimirova',
            'id': 14944973,
            'avatar_url': 'https://avatars.githubusercontent.com/u/14944973?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/Victoria-Vladimirova',
            'html_url': 'https://github.com/Victoria-Vladimirova',
            'followers_url': 'https://api.github.com/users/Victoria-Vladimirova/followers',
            'following_url': 'https://api.github.com/users/Victoria-Vladimirova/following{/other_user}',
            'gists_url': 'https://api.github.com/users/Victoria-Vladimirova/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/Victoria-Vladimirova/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/Victoria-Vladimirova/subscriptions',
            'organizations_url': 'https://api.github.com/users/Victoria-Vladimirova/orgs',
            'repos_url': 'https://api.github.com/users/Victoria-Vladimirova/repos',
            'events_url': 'https://api.github.com/users/Victoria-Vladimirova/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/Victoria-Vladimirova/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Можно это пояснить? :)',
        'created_at': '2016-02-27T09:55:49Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331399',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331399'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331399'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331591',
        'id': 54331591,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 44,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '@Victoria-Vladimirova, просто длинная регулярка :) Можно написать короче',
        'created_at': '2016-02-27T10:16:06Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331591',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331591'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331591'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331653',
        'id': 54331653,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);\n+                    reject();\n+                }\n+            }\n+        );\n+    });\n+};\n+\n+var fetchFiles = function (stream) {\n+    var promises = [];\n+    for (var i = 1; i <= 10; i++) {\n+        promises[i] = fetchFile(\'https://api.github.com/repos/urfu-2015/verstka-tasks-\' +\n+            i + \'/readme\', stream);\n+    }\n+    Promise.all(promises).then(function () {\n+        stream.end();\n+    });\n+};\n+\n+var count = function (word, callback) {\n+    var stem = natural.PorterStemmerRu.stem(word);\n+    var transform = createRemoveMarkdownTransform();\n+    transform.pipe(createSplitTransform())\n+        .pipe(createRemovePunctuationMarksTransform())\n+        .pipe(createToLowerCaseTransform())\n+        .pipe(createRemoveCommonWordsTransform())\n+        .pipe(createStemmerTransform())\n+        .pipe(reduce(function (acc, chunk) {\n+            var textWord = chunk.toString();\n+            if (natural.JaroWinklerDistance(textWord, stem) >= MIN_WORD_DISTANCE) {',
        'path': 'counter.js',
        'position': null,
        'original_position': 131,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Хороший кейс с использованием расстояния  Jaro-Уинклера, но в таком случае не учитывается смысловая составляющяя слов. Например, JaroWinklerDistance(\'сорока\', \'сорок\') => 0.96(6)\r\nВ каком-то смысле это некорректный подход, но в данном задании твой подход оправдан.',
        'created_at': '2016-02-27T10:20:59Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331653',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331653'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331653'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331702',
        'id': 54331702,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);',
        'path': 'counter.js',
        'position': null,
        'original_position': 102,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'По смыслу здесь больше подходит `console.error(res.statusCode)`',
        'created_at': '2016-02-27T10:28:20Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331702',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331702'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331702'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331729',
        'id': 54331729,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 9,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Расширение можно не писать',
        'created_at': '2016-02-27T10:31:17Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331729',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331729'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331729'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331880',
        'id': 54331880,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));',
        'path': 'counter.js',
        'position': 155,
        'original_position': 99,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': ':cry: \r\nError: not implemented\r\n    at Transform._transform (_stream_transform.js:154:9)\r\n    at Transform._read (_stream_transform.js:179:10)\r\n    at Transform._write (_stream_transform.js:167:12)\r\n    at doWrite (_stream_writable.js:226:10)\r\n    at writeOrBuffer (_stream_writable.js:216:5)\r\n    at Transform.Writable.write (_stream_writable.js:183:11)\r\n    at Request._callback (/Users/evilj0e/urfu/webdev-tasks-1/counter.js:102:28)\r\n    at Request.self.callback (/Users/evilj0e/urfu/webdev-tasks-1/node_modules/request/request.js:199:22)\r\n    at Request.emit (events.js:98:17)\r\n    at Request.<anonymous> (/Users/evilj0e/urfu/webdev-tasks-1/node_modules/request/request.js:1036:10)',
        'created_at': '2016-02-27T10:52:02Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331880',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331880'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331880'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331893',
        'id': 54331893,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);\n+                    reject();\n+                }\n+            }\n+        );\n+    });\n+};\n+\n+var fetchFiles = function (stream) {\n+    var promises = [];\n+    for (var i = 1; i <= 10; i++) {\n+        promises[i] = fetchFile(\'https://api.github.com/repos/urfu-2015/verstka-tasks-\' +\n+            i + \'/readme\', stream);\n+    }\n+    Promise.all(promises).then(function () {\n+        stream.end();\n+    });\n+};\n+\n+var count = function (word, callback) {\n+    var stem = natural.PorterStemmerRu.stem(word);\n+    var transform = createRemoveMarkdownTransform();\n+    transform.pipe(createSplitTransform())\n+        .pipe(createRemovePunctuationMarksTransform())\n+        .pipe(createToLowerCaseTransform())\n+        .pipe(createRemoveCommonWordsTransform())\n+        .pipe(createStemmerTransform())\n+        .pipe(reduce(function (acc, chunk) {\n+            var textWord = chunk.toString();\n+            if (natural.JaroWinklerDistance(textWord, stem) >= MIN_WORD_DISTANCE) {\n+                acc++;\n+            }\n+            return acc;\n+        }, 0).on(\'data\', function (count) {\n+            callback(count);\n+        }));\n+\n+    fetchFiles(transform);\n+};\n+\n+var top = function (callback) {\n+    var transform = createRemoveMarkdownTransform();\n+    transform.pipe(createSplitTransform())\n+        .pipe(createRemovePunctuationMarksTransform())\n+        .pipe(createToLowerCaseTransform())\n+        .pipe(createRemoveCommonWordsTransform())\n+        .pipe(reduce(function (acc, chunk) {\n+            var word = chunk.toString();\n+            var stem = natural.PorterStemmerRu.stem(word);\n+            (acc[stem] || (acc[stem] = [])).push(word);\n+            return acc;\n+        }, {}).on(\'data\', function (data) {\n+\n+            var stems = Object.keys(data);\n+\n+            for (var i = 0; i < stems.length; i++) {\n+                for (var j = i + 1; j < stems.length; j++) {\n+                    if (data[stems[i]] && data[stems[j]] &&\n+                        natural.JaroWinklerDistance(stems[i], stems[j]) >= MIN_WORD_DISTANCE) {\n+                        data[stems[i]] = data[stems[i]].concat(data[stems[j]]);\n+                        delete data[stems[j]];\n+                    }\n+                }\n+            }\n+\n+            var sortedStems = Object.keys(data).map(function (stem) {\n+                return [data[stem].sort()[0], data[stem].length];\n+            }).sort(function (stemData1, stemData2) {\n+                return stemData2[1] - stemData1[1];\n+            }).slice(0, MAX_TOP_WORDS);\n+\n+            callback(sortedStems);\n+        }));\n+\n+    fetchFiles(transform);\n+};\n+\n+module.exports.count = count;',
        'path': 'counter.js',
        'position': null,
        'original_position': 179,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '`module.exports = {\r\n  count: count,\r\n  top: top\r\n}`',
        'created_at': '2016-02-27T10:53:11Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331893',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331893'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331893'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54332799',
        'id': 54332799,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));',
        'path': 'counter.js',
        'position': 155,
        'original_position': 99,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'Victoria-Vladimirova',
            'id': 14944973,
            'avatar_url': 'https://avatars.githubusercontent.com/u/14944973?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/Victoria-Vladimirova',
            'html_url': 'https://github.com/Victoria-Vladimirova',
            'followers_url': 'https://api.github.com/users/Victoria-Vladimirova/followers',
            'following_url': 'https://api.github.com/users/Victoria-Vladimirova/following{/other_user}',
            'gists_url': 'https://api.github.com/users/Victoria-Vladimirova/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/Victoria-Vladimirova/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/Victoria-Vladimirova/subscriptions',
            'organizations_url': 'https://api.github.com/users/Victoria-Vladimirova/orgs',
            'repos_url': 'https://api.github.com/users/Victoria-Vladimirova/repos',
            'events_url': 'https://api.github.com/users/Victoria-Vladimirova/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/Victoria-Vladimirova/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '@evilj0e У тебя каждый раз так или ты что-то сделал? 😯',
        'created_at': '2016-02-27T12:32:00Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54332799',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54332799'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54332799'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54333337',
        'id': 54333337,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));',
        'path': 'counter.js',
        'position': 155,
        'original_position': 99,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '@Victoria-Vladimirova, просто делаю `npm i && node index.js` и получаю ошибку стрима.\r\nnpm 1.4.28\r\nnodejs v0.10.36',
        'created_at': '2016-02-27T13:30:55Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54333337',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54333337'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54333337'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    }
];

module.exports.secondReply = [
    {
        'sha': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'commit': {
            'author': {
                'name': 'Victoria-Vladimirova',
                'email': 'victoria@macbook-air-victoria.local',
                'date': '2016-02-23T15:50:02Z'
            },
            'committer': {
                'name': 'Victoria-Vladimirova',
                'email': 'victoria@macbook-air-victoria.local',
                'date': '2016-02-23T15:50:02Z'
            },
            'message': 'Задача решена с использованием Stream и асинхронными функциями',
            'tree': {
                'sha': '2cd2253ba962b9fd9e0a064ae16a16ac2c3ebb24',
                'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/git/trees/2cd2253ba962b9fd9e0a064ae16a16ac2c3ebb24'
            },
            'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/git/commits/38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
            'comment_count': 0
        },
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/commits/38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/commit/38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'comments_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/commits/38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae/comments',
        'author': null,
        'committer': null,
        'parents': [
            {
                'sha': '6ff732253132f88e1eec631e611136f3676768b7',
                'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/commits/6ff732253132f88e1eec631e611136f3676768b7',
                'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/commit/6ff732253132f88e1eec631e611136f3676768b7'
            }
        ]
    },
    {
        'sha': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'commit': {
            'author': {
                'name': 'Victoria-Vladimirova',
                'email': 'victoria@macbook-air-victoria.local',
                'date': '2016-02-27T14:11:17Z'
            },
            'committer': {
                'name': 'Victoria-Vladimirova',
                'email': 'victoria@macbook-air-victoria.local',
                'date': '2016-02-27T14:11:17Z'
            },
            'message': 'Исправлена ошибка стрима для v0.10.36',
            'tree': {
                'sha': '68b870789f3aef6554a12da11a72c8c5622ae3fa',
                'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/git/trees/68b870789f3aef6554a12da11a72c8c5622ae3fa'
            },
            'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/git/commits/c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
            'comment_count': 1
        },
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/commits/c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/commit/c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'comments_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/commits/c2bd28eba1a0a7504d0d46c95f3612db6a45c28b/comments',
        'author': null,
        'committer': null,
        'parents': [
            {
                'sha': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
                'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/commits/38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
                'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/commit/38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae'
            }
        ]
    }
];

module.exports.firstTest = [
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54328917',
        'id': 54328917,
        'diff_hunk': '@@ -0,0 +1,6 @@\n+var commonWords = [\'без\', \'в\', \'до\', \'для\', \'за\', \'из\', \'к\', \'как\', \'на\', \'над\', \'о\', \'об\', \'от\',',
        'path': 'commonWords.js',
        'position': null,
        'original_position': 1,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Наименование скорее всего должно быть не "Общие слова", верно?\r\nЛучше всего раскидывать файлы логически по директориям. Так как это вспомогательный файл, его лучше хранить, например, в /lib/. Пока файлов в корне, как сейчас, немного -- это дополнительная фича, но когда их больше -- это упрощает жизнь.',
        'created_at': '2016-02-27T05:38:32Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54328917',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54328917'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54328917'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329049',
        'id': 54329049,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {',
        'path': 'counter.js',
        'position': null,
        'original_position': 14,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'jsdoc?',
        'created_at': '2016-02-27T05:53:58Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329049',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329049'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329049'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329078',
        'id': 54329078,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов',
        'path': 'counter.js',
        'position': null,
        'original_position': 33,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Можно вынести в переменные',
        'created_at': '2016-02-27T05:56:58Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329078',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329078'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329078'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329083',
        'id': 54329083,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 44,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'ауч',
        'created_at': '2016-02-27T05:57:34Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329083',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329083'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329083'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329161',
        'id': 54329161,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 83,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Стоит вынести вверх. И что будет, если нет такого файла, м?',
        'created_at': '2016-02-27T06:04:22Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329161',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329161'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329161'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329244',
        'id': 54329244,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);\n+                    reject();\n+                }\n+            }\n+        );\n+    });\n+};\n+\n+var fetchFiles = function (stream) {\n+    var promises = [];\n+    for (var i = 1; i <= 10; i++) {\n+        promises[i] = fetchFile(\'https://api.github.com/repos/urfu-2015/verstka-tasks-\' +\n+            i + \'/readme\', stream);\n+    }\n+    Promise.all(promises).then(function () {\n+        stream.end();\n+    });\n+};\n+\n+var count = function (word, callback) {\n+    var stem = natural.PorterStemmerRu.stem(word);\n+    var transform = createRemoveMarkdownTransform();',
        'path': 'counter.js',
        'position': null,
        'original_position': 123,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Идентичные вызовы в функции ниже.',
        'created_at': '2016-02-27T06:12:05Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329244',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54329244'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54329244'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331399',
        'id': 54331399,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 44,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'Victoria-Vladimirova',
            'id': 14944973,
            'avatar_url': 'https://avatars.githubusercontent.com/u/14944973?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/Victoria-Vladimirova',
            'html_url': 'https://github.com/Victoria-Vladimirova',
            'followers_url': 'https://api.github.com/users/Victoria-Vladimirova/followers',
            'following_url': 'https://api.github.com/users/Victoria-Vladimirova/following{/other_user}',
            'gists_url': 'https://api.github.com/users/Victoria-Vladimirova/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/Victoria-Vladimirova/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/Victoria-Vladimirova/subscriptions',
            'organizations_url': 'https://api.github.com/users/Victoria-Vladimirova/orgs',
            'repos_url': 'https://api.github.com/users/Victoria-Vladimirova/repos',
            'events_url': 'https://api.github.com/users/Victoria-Vladimirova/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/Victoria-Vladimirova/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Можно это пояснить? :)',
        'created_at': '2016-02-27T09:55:49Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331399',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331399'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331399'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331591',
        'id': 54331591,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 44,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '@Victoria-Vladimirova, просто длинная регулярка :) Можно написать короче',
        'created_at': '2016-02-27T10:16:06Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331591',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331591'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331591'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331653',
        'id': 54331653,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);\n+                    reject();\n+                }\n+            }\n+        );\n+    });\n+};\n+\n+var fetchFiles = function (stream) {\n+    var promises = [];\n+    for (var i = 1; i <= 10; i++) {\n+        promises[i] = fetchFile(\'https://api.github.com/repos/urfu-2015/verstka-tasks-\' +\n+            i + \'/readme\', stream);\n+    }\n+    Promise.all(promises).then(function () {\n+        stream.end();\n+    });\n+};\n+\n+var count = function (word, callback) {\n+    var stem = natural.PorterStemmerRu.stem(word);\n+    var transform = createRemoveMarkdownTransform();\n+    transform.pipe(createSplitTransform())\n+        .pipe(createRemovePunctuationMarksTransform())\n+        .pipe(createToLowerCaseTransform())\n+        .pipe(createRemoveCommonWordsTransform())\n+        .pipe(createStemmerTransform())\n+        .pipe(reduce(function (acc, chunk) {\n+            var textWord = chunk.toString();\n+            if (natural.JaroWinklerDistance(textWord, stem) >= MIN_WORD_DISTANCE) {',
        'path': 'counter.js',
        'position': null,
        'original_position': 131,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Хороший кейс с использованием расстояния  Jaro-Уинклера, но в таком случае не учитывается смысловая составляющяя слов. Например, JaroWinklerDistance(\'сорока\', \'сорок\') => 0.96(6)\r\nВ каком-то смысле это некорректный подход, но в данном задании твой подход оправдан.',
        'created_at': '2016-02-27T10:20:59Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331653',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331653'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331653'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331702',
        'id': 54331702,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);',
        'path': 'counter.js',
        'position': null,
        'original_position': 102,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'По смыслу здесь больше подходит `console.error(res.statusCode)`',
        'created_at': '2016-02-27T10:28:20Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331702',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331702'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331702'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331729',
        'id': 54331729,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');',
        'path': 'counter.js',
        'position': null,
        'original_position': 9,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': 'Расширение можно не писать',
        'created_at': '2016-02-27T10:31:17Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331729',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331729'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331729'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331880',
        'id': 54331880,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));',
        'path': 'counter.js',
        'position': 155,
        'original_position': 99,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': ':cry: \r\nError: not implemented\r\n    at Transform._transform (_stream_transform.js:154:9)\r\n    at Transform._read (_stream_transform.js:179:10)\r\n    at Transform._write (_stream_transform.js:167:12)\r\n    at doWrite (_stream_writable.js:226:10)\r\n    at writeOrBuffer (_stream_writable.js:216:5)\r\n    at Transform.Writable.write (_stream_writable.js:183:11)\r\n    at Request._callback (/Users/evilj0e/urfu/webdev-tasks-1/counter.js:102:28)\r\n    at Request.self.callback (/Users/evilj0e/urfu/webdev-tasks-1/node_modules/request/request.js:199:22)\r\n    at Request.emit (events.js:98:17)\r\n    at Request.<anonymous> (/Users/evilj0e/urfu/webdev-tasks-1/node_modules/request/request.js:1036:10)',
        'created_at': '2016-02-27T10:52:02Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331880',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331880'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331880'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331893',
        'id': 54331893,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));\n+                    resolve();\n+                } else {\n+                    console.log(res.statusCode);\n+                    reject();\n+                }\n+            }\n+        );\n+    });\n+};\n+\n+var fetchFiles = function (stream) {\n+    var promises = [];\n+    for (var i = 1; i <= 10; i++) {\n+        promises[i] = fetchFile(\'https://api.github.com/repos/urfu-2015/verstka-tasks-\' +\n+            i + \'/readme\', stream);\n+    }\n+    Promise.all(promises).then(function () {\n+        stream.end();\n+    });\n+};\n+\n+var count = function (word, callback) {\n+    var stem = natural.PorterStemmerRu.stem(word);\n+    var transform = createRemoveMarkdownTransform();\n+    transform.pipe(createSplitTransform())\n+        .pipe(createRemovePunctuationMarksTransform())\n+        .pipe(createToLowerCaseTransform())\n+        .pipe(createRemoveCommonWordsTransform())\n+        .pipe(createStemmerTransform())\n+        .pipe(reduce(function (acc, chunk) {\n+            var textWord = chunk.toString();\n+            if (natural.JaroWinklerDistance(textWord, stem) >= MIN_WORD_DISTANCE) {\n+                acc++;\n+            }\n+            return acc;\n+        }, 0).on(\'data\', function (count) {\n+            callback(count);\n+        }));\n+\n+    fetchFiles(transform);\n+};\n+\n+var top = function (callback) {\n+    var transform = createRemoveMarkdownTransform();\n+    transform.pipe(createSplitTransform())\n+        .pipe(createRemovePunctuationMarksTransform())\n+        .pipe(createToLowerCaseTransform())\n+        .pipe(createRemoveCommonWordsTransform())\n+        .pipe(reduce(function (acc, chunk) {\n+            var word = chunk.toString();\n+            var stem = natural.PorterStemmerRu.stem(word);\n+            (acc[stem] || (acc[stem] = [])).push(word);\n+            return acc;\n+        }, {}).on(\'data\', function (data) {\n+\n+            var stems = Object.keys(data);\n+\n+            for (var i = 0; i < stems.length; i++) {\n+                for (var j = i + 1; j < stems.length; j++) {\n+                    if (data[stems[i]] && data[stems[j]] &&\n+                        natural.JaroWinklerDistance(stems[i], stems[j]) >= MIN_WORD_DISTANCE) {\n+                        data[stems[i]] = data[stems[i]].concat(data[stems[j]]);\n+                        delete data[stems[j]];\n+                    }\n+                }\n+            }\n+\n+            var sortedStems = Object.keys(data).map(function (stem) {\n+                return [data[stem].sort()[0], data[stem].length];\n+            }).sort(function (stemData1, stemData2) {\n+                return stemData2[1] - stemData1[1];\n+            }).slice(0, MAX_TOP_WORDS);\n+\n+            callback(sortedStems);\n+        }));\n+\n+    fetchFiles(transform);\n+};\n+\n+module.exports.count = count;',
        'path': 'counter.js',
        'position': null,
        'original_position': 179,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '`module.exports = {\r\n  count: count,\r\n  top: top\r\n}`',
        'created_at': '2016-02-27T10:53:11Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331893',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54331893'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54331893'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54332799',
        'id': 54332799,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));',
        'path': 'counter.js',
        'position': 155,
        'original_position': 99,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'Victoria-Vladimirova',
            'id': 14944973,
            'avatar_url': 'https://avatars.githubusercontent.com/u/14944973?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/Victoria-Vladimirova',
            'html_url': 'https://github.com/Victoria-Vladimirova',
            'followers_url': 'https://api.github.com/users/Victoria-Vladimirova/followers',
            'following_url': 'https://api.github.com/users/Victoria-Vladimirova/following{/other_user}',
            'gists_url': 'https://api.github.com/users/Victoria-Vladimirova/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/Victoria-Vladimirova/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/Victoria-Vladimirova/subscriptions',
            'organizations_url': 'https://api.github.com/users/Victoria-Vladimirova/orgs',
            'repos_url': 'https://api.github.com/users/Victoria-Vladimirova/repos',
            'events_url': 'https://api.github.com/users/Victoria-Vladimirova/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/Victoria-Vladimirova/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '@evilj0e У тебя каждый раз так или ты что-то сделал? 😯',
        'created_at': '2016-02-27T12:32:00Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54332799',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54332799'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54332799'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    },
    {
        'url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54333337',
        'id': 54333337,
        'diff_hunk': '@@ -0,0 +1,180 @@\n+const request = require(\'request\');\n+const fs = require(\'fs\');\n+const stream = require(\'stream\');\n+const util = require(\'util\');\n+const Promise = require(\'promise\');\n+const natural = require(\'natural\');\n+const reduce = require(\'stream-reduce\');\n+\n+var commonWords = require(\'./commonWords.js\');\n+\n+const MIN_WORD_DISTANCE = 0.90;\n+const MAX_TOP_WORDS = 10;\n+\n+var createSplitTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var words = chunk.toString().split(/\\s+|-|\\//);\n+            words.forEach(function (word) {\n+                this.push(word);\n+            }, this);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveMarkdownTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString()\n+                .replace(/<.+>/g, \'\') // теги\n+                .replace(/\\[(.*)\\]\\(.+\\)/g, \'$1\') // ссылки\n+                .replace(/^```.*\\n((.*\\n)+?)```$/gm, \'\') // код\n+                .replace(/[a-zA-Z_]+\\.(js|html|css)/g, \'\') // имена файлов\n+                .replace(/(:.+:)/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemovePunctuationMarksTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().replace(/[\\d«»–\\[\\].,№\\/#\\+!$%\\^@&\\*;"\':{}|=\\-_`~()]/g, \'\');\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createToLowerCaseTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var text = chunk.toString().toLowerCase();\n+            this.push(text);\n+            cb();\n+        }\n+    });\n+};\n+\n+var createRemoveCommonWordsTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            var word = chunk.toString();\n+            if (commonWords.indexOf(word) < 0) {\n+                this.push(word);\n+            }\n+            cb();\n+        }\n+    });\n+};\n+\n+var createStemmerTransform = function () {\n+    return new stream.Transform({\n+        transform: function (chunk, enc, cb) {\n+            this.push(natural.PorterStemmerRu.stem(chunk.toString()));\n+            cb();\n+        }\n+    });\n+};\n+\n+\n+var token = fs.readFileSync(\'key.txt\');\n+\n+var fetchFile = function (url, stream) {\n+    return new Promise(function (resolve, reject) {\n+        var options = {\n+            url: url,\n+            headers: {\n+                \'User-Agent\': \'request\',\n+                Authorization: \'token \' + token\n+            }\n+        };\n+\n+        request(options,\n+            function (err, res, body) {\n+                if (!err && res.statusCode === 200) {\n+                    const readme = JSON.parse(body);\n+                    stream.write(new Buffer(readme.content, \'base64\').toString(\'utf-8\'));',
        'path': 'counter.js',
        'position': 155,
        'original_position': 99,
        'commit_id': 'c2bd28eba1a0a7504d0d46c95f3612db6a45c28b',
        'original_commit_id': '38c9a6fc6bbe78750d57a26f2d22d2eac8a92aae',
        'user': {
            'login': 'evilj0e',
            'id': 914429,
            'avatar_url': 'https://avatars.githubusercontent.com/u/914429?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/evilj0e',
            'html_url': 'https://github.com/evilj0e',
            'followers_url': 'https://api.github.com/users/evilj0e/followers',
            'following_url': 'https://api.github.com/users/evilj0e/following{/other_user}',
            'gists_url': 'https://api.github.com/users/evilj0e/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/evilj0e/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/evilj0e/subscriptions',
            'organizations_url': 'https://api.github.com/users/evilj0e/orgs',
            'repos_url': 'https://api.github.com/users/evilj0e/repos',
            'events_url': 'https://api.github.com/users/evilj0e/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/evilj0e/received_events',
            'type': 'User',
            'site_admin': false
        },
        'body': '@Victoria-Vladimirova, просто делаю `npm i && node index.js` и получаю ошибку стрима.\r\nnpm 1.4.28\r\nnodejs v0.10.36',
        'created_at': '2016-02-27T13:30:55Z',
        'updated_at': '2016-02-27T14:23:48Z',
        'html_url': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54333337',
        'pull_request_url': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7',
        '_links': {
            'self': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/comments/54333337'
            },
            'html': {
                'href': 'https://github.com/urfu-2015/webdev-tasks-1/pull/7#discussion_r54333337'
            },
            'pull_request': {
                'href': 'https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7'
            }
        }
    }
];
