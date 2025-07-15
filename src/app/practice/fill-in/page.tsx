"use client";
import React, { useState, useEffect } from "react";

interface Question {
  id: number;
  stem: string;
  answer: string;
  category: string;
}

const allQuestions: Question[] = [
  // N5 基础题
  { id: 1, stem: "私は____（ご飯 / ラーメン）を食べます。", answer: "ご飯", category: "N5基础题" },
  { id: 2, stem: "これは____（本 / 鉛筆）です。", answer: "鉛筆", category: "N5基础题" },
  { id: 3, stem: "あした____（学校 / 家）へ行きます。", answer: "学校", category: "N5基础题" },
  { id: 4, stem: "李さんは____（中国 / 日本）から来ました。", answer: "中国", category: "N5基础题" },
  { id: 5, stem: "部屋に____（机 / 椅子）があります。", answer: "机", category: "N5基础题" },
  { id: 6, stem: "昨日____（映画 / テレビ）を見ました。", answer: "映画", category: "N5基础题" },
  { id: 7, stem: "おばあさんは____（毎日 / 今日）散歩します。", answer: "毎日", category: "N5基础题" },
  { id: 8, stem: "このペンは____（だれ / どこ）のですか？", answer: "だれ", category: "N5基础题" },
  { id: 9, stem: "今朝____（卵 / 果物）を食べました。", answer: "卵", category: "N5基础题" },
  { id: 10, stem: "弟は____（自転車 / 車）で学校へ行きます。", answer: "自転車", category: "N5基础题" },
  { id: 11, stem: "明日____（雨 / 晴れ）の予報です。", answer: "晴れ", category: "N5基础题" },
  { id: 12, stem: "コーヒーを____（飲みます / 食べます）。", answer: "飲みます", category: "N5基础题" },
  { id: 13, stem: "この本は____（高い / 安い）です。", answer: "安い", category: "N5基础题" },
  { id: 14, stem: "友達と____（公園 / 駅）で会います。", answer: "公園", category: "N5基础题" },
  { id: 15, stem: "母は____（毎晩 / 今朝）料理を作ります。", answer: "毎晩", category: "N5基础题" },
  { id: 16, stem: "この傘は____（私 / あなた）のですか？", answer: "あなた", category: "N5基础题" },
  { id: 17, stem: "子供たちは____（歌う / 話す）をしています。", answer: "歌う", category: "N5基础题" },
  { id: 18, stem: "午後____（図書館 / 病院）へ行きます。", answer: "図書館", category: "N5基础题" },
  { id: 19, stem: "犬が____（二匹 / 二個）います。", answer: "二匹", category: "N5基础题" },
  { id: 20, stem: "あの人は____（先生 / 学生）です。", answer: "先生", category: "N5基础题" },
  // N4 基础进阶题
  { id: 21, stem: "休みの日は____（何を / どこを）しますか？", answer: "何を", category: "N4基础进阶题" },
  { id: 22, stem: "昨日友達に____（会いました / 会います）。", answer: "会いました", category: "N4基础进阶题" },
  { id: 23, stem: "この本は____（王さんに / 王さんへ）貸しました。", answer: "王さんに", category: "N4基础进阶题" },
  { id: 24, stem: "部屋が____（狭いです / 狭くないです）。", answer: "狭いです", category: "N4基础进阶题" },
  { id: 25, stem: "お茶を____（飲みたいです / 飲みます）。", answer: "飲みたいです", category: "N4基础进阶题" },
  { id: 26, stem: "李さんは____（日本語が / 日本語を）上手です。", answer: "日本語が", category: "N4基础进阶题" },
  { id: 27, stem: "食べ物は____（美味しいです / 美味しくないです）。", answer: "美味しいです", category: "N4基础进阶题" },
  { id: 28, stem: "この店は____（いつも / たまに）込んでいます。", answer: "いつも", category: "N4基础进阶题" },
  { id: 29, stem: "電車が____（遅くなりました / 遅くありません）。", answer: "遅くなりました", category: "N4基础进阶题" },
  { id: 30, stem: "妹は____（歌うことが / 歌うことを）好きです。", answer: "歌うことが", category: "N4基础进阶题" },
  { id: 31, stem: "パーティーに____（参加します / 参加しました）。", answer: "参加します", category: "N4基础进阶题" },
  { id: 32, stem: "この雑誌は____（面白いです / 面白くないです）。", answer: "面白いです", category: "N4基础进阶题" },
  { id: 33, stem: "友達に____（手紙を / 手紙が）書きます。", answer: "手紙を", category: "N4基础进阶题" },
  { id: 34, stem: "図書館で____（本を借ります / 本を買います）。", answer: "本を借ります", category: "N4基础进阶题" },
  { id: 35, stem: "雨が____（降ります / 降りました）から、傘を持って行きます。", answer: "降ります", category: "N4基础进阶题" },
  { id: 36, stem: "王さんは____（会社に / 会社へ）勤めています。", answer: "会社に", category: "N4基础进阶题" },
  { id: 37, stem: "このスカートは____（安かったです / 高かったです）。", answer: "安かったです", category: "N4基础进阶题" },
  { id: 38, stem: "日曜日は____（何時に / 何時で）起きますか？", answer: "何時に", category: "N4基础进阶题" },
  { id: 39, stem: "お父さんは____（毎朝 / 毎晩）新聞を読みます。", answer: "毎朝", category: "N4基础进阶题" },
  { id: 40, stem: "友達と____（映画を見ます / 映画を見ました）。", answer: "映画を見ます", category: "N4基础进阶题" },
  // N3 中级题
  { id: 41, stem: "試験の前に____（よく勉強しました / よく勉強します）。", answer: "よく勉強しました", category: "N3中级题" },
  { id: 42, stem: "この本は____（読みたくて / 読みたいで）、買いました。", answer: "読みたくて", category: "N3中级题" },
  { id: 43, stem: "王さんは____（旅行に行きます / 旅行に行きました）。", answer: "旅行に行きました", category: "N3中级题" },
  { id: 44, stem: "この料理は____（辛すぎます / 辛くないです）。", answer: "辛すぎます", category: "N3中级题" },
  { id: 45, stem: "雨が____（降っています / 降りました）から、窓を閉めました。", answer: "降っています", category: "N3中级题" },
  { id: 46, stem: "部屋の電気を____（消しました / 消します）。", answer: "消しました", category: "N3中级题" },
  { id: 47, stem: "この車は____（高すぎます / 高くないです）。", answer: "高すぎます", category: "N3中级题" },
  { id: 48, stem: "友達に____（会いたいです / 会います）。", answer: "会いたいです", category: "N3中级题" },
  { id: 49, stem: "お母さんは____（料理を作ります / 料理を作りました）。", answer: "料理を作りました", category: "N3中级题" },
  { id: 50, stem: "この店は____（人気があります / 人気がありません）。", answer: "人気があります", category: "N3中级题" },
  { id: 51, stem: "雨が____（降りそうです / 降ります）。傘を持って行きましょう。", answer: "降りそうです", category: "N3中级题" },
  { id: 52, stem: "昨日の映画は____（面白かったです / 面白くなかったです）。", answer: "面白かったです", category: "N3中级题" },
  { id: 53, stem: "李さんは____（日本へ行きました / 日本へ行きます）。", answer: "日本へ行きました", category: "N3中级题" },
  { id: 54, stem: "この本は____（王さんのです / 王さんです）。", answer: "王さんのです", category: "N3中级题" },
  { id: 55, stem: "部屋を____（掃除しました / 掃除します）。", answer: "掃除しました", category: "N3中级题" },
  { id: 56, stem: "お酒を____（飲みすぎました / 飲みました）。", answer: "飲みすぎました", category: "N3中级题" },
  { id: 57, stem: "この服は____（似合います / 似合いません）。", answer: "似合います", category: "N3中级题" },
  { id: 58, stem: "明日は____（休みです / 休みます）。", answer: "休みです", category: "N3中级题" },
  { id: 59, stem: "友達に____（電話をかけます / 電話をもらいます）。", answer: "電話をかけます", category: "N3中级题" },
  { id: 60, stem: "このペンは____（書きやすいです / 書きにくいです）。", answer: "書きやすいです", category: "N3中级题" },
  // N2 中高级题
  { id: 61, stem: "彼は____（遅刻しないように / 遅刻したそうに）気をつけています。", answer: "遅刻しないように", category: "N2中高级题" },
  { id: 62, stem: "この問題は____（難しすぎて / 難しくても）解けません。", answer: "難しすぎて", category: "N2中高级题" },
  { id: 63, stem: "雨が____（降り続けて / 降り始めて）います。", answer: "降り続けて", category: "N2中高级题" },
  { id: 64, stem: "この本は____（読み終わって / 読み始めて）います。", answer: "読み終わって", category: "N2中高级题" },
  { id: 65, stem: "王さんは____（帰ってきた / 帰っていた）そうです。", answer: "帰ってきた", category: "N2中高级题" },
  { id: 66, stem: "この映画は____（見るに値する / 見ることができる）。", answer: "見るに値する", category: "N2中高级题" },
  { id: 67, stem: "友達に____（頼まれて / 頼んで）、手伝いました。", answer: "頼まれて", category: "N2中高级题" },
  { id: 68, stem: "このペンは____（書きにくいと / 書きにくいが）思います。", answer: "書きにくいと", category: "N2中高级题" },
  { id: 69, stem: "試験の結果を____（待ちきれない / 待ちたくない）。", answer: "待ちきれない", category: "N2中高级题" },
  { id: 70, stem: "彼は____（病気で / 病気に）休んでいます。", answer: "病気で", category: "N2中高级题" },
  { id: 71, stem: "この店は____（おすすめします / おすすめしたい）。", answer: "おすすめします", category: "N2中高级题" },
  { id: 72, stem: "王さんは____（日本語が上手に / 日本語を上手に）なりました。", answer: "日本語が上手に", category: "N2中高级题" },
  { id: 73, stem: "このパソコンは____（古くても / 古いから）、まだ使えます。", answer: "古くても", category: "N2中高级题" },
  { id: 74, stem: "友達に____（会ったところ / 会ったばかり）です。", answer: "会ったばかり", category: "N2中高级题" },
  { id: 75, stem: "この料理は____（食べられそうです / 食べられなそうです）。", answer: "食べられそうです", category: "N2中高级题" },
  { id: 76, stem: "彼は____（怒っているように / 怒っているそうに）見えます。", answer: "怒っているように", category: "N2中高级题" },
  { id: 77, stem: "この本は____（読めば読むほど / 読むと）面白くなります。", answer: "読めば読むほど", category: "N2中高级题" },
  { id: 78, stem: "友達に____（勧められて / 勧めて）、この本を買いました。", answer: "勧められて", category: "N2中高级题" },
  { id: 79, stem: "この問題は____（誰にでも / 誰かに）分かります。", answer: "誰にでも", category: "N2中高级题" },
  { id: 80, stem: "彼は____（失敗しても / 失敗すると）諦めません。", answer: "失敗しても", category: "N2中高级题" },
  // N1 高级题
  { id: 81, stem: "この計画は____（実行するにあたって / 実行したあげく）、十分な準備が必要です。", answer: "実行するにあたって", category: "N1高级题" },
  { id: 82, stem: "彼の態度は____（許すまい / 許さざるを得ない）。", answer: "許すまい", category: "N1高级题" },
  { id: 83, stem: "この現象は____（考えれば考えるほど / 考えるにつけ）不思議だ。", answer: "考えれば考えるほど", category: "N1高级题" },
  { id: 84, stem: "彼は____（病気ながらも / 病気であっても）、仕事を続けています。", answer: "病気ながらも", category: "N1高级题" },
  { id: 85, stem: "この決定は____（反対するものの / 反対したあげく）、行われました。", answer: "反対するものの", category: "N1高级题" },
  { id: 86, stem: "彼は____（知らないふりをして / 知らないつもりで）、質問に答えません。", answer: "知らないふりをして", category: "N1高级题" },
  { id: 87, stem: "この事件は____（解決するまでは / 解決したところで）、休むつもりはありません。", answer: "解決するまでは", category: "N1高级题" },
  { id: 88, stem: "彼の言葉は____（信じるにしても / 信じがたい）。", answer: "信じがたい", category: "N1高级题" },
  { id: 89, stem: "この企画は____（成功するかもしれない / 成功するとも限らない）。", answer: "成功するとも限らない", category: "N1高级题" },
  { id: 90, stem: "彼は____（言われるまいと / 言われるまでもなく）、自分で謝りました。", answer: "言われるまでもなく", category: "N1高级题" },
  { id: 91, stem: "この問題は____（直ちに解決するべきだ / 直ちに解決してもいい）。", answer: "直ちに解決するべきだ", category: "N1高级题" },
  { id: 92, stem: "彼は____（自分が悪いのに / 自分が悪くないのに）、謝らない。", answer: "自分が悪いのに", category: "N1高级题" },
  { id: 93, stem: "この現象は____（研究するに足る / 研究するに及ばない）。", answer: "研究するに足る", category: "N1高级题" },
  { id: 94, stem: "彼は____（嫌がらせを受けつつも / 嫌がらせを受けたところで）、頑張っています。", answer: "嫌がらせを受けつつも", category: "N1高级题" },
  { id: 95, stem: "この決断は____（後悔することなく / 後悔することがあっても）、行います。", answer: "後悔することなく", category: "N1高级题" },
  { id: 96, stem: "彼は____（言われるまいと / 言われるまでもなく）、行動しました。", answer: "言われるまでもなく", category: "N1高级题" },
  { id: 97, stem: "この問題は____（私にとって / 私に対して）難しすぎます。", answer: "私にとって", category: "N1高级题" },
  { id: 98, stem: "彼は____（知らないふりをしつつ / 知らないふりをしたまま）、聞き流しました。", answer: "知らないふりをしつつ", category: "N1高级题" },
  { id: 99, stem: "この計画は____（実行するに先立って / 実行したあげく）、再検討が必要だ。", answer: "実行するに先立って", category: "N1高级题" },
  { id: 100, stem: "彼は____（苦労しながらも / 苦労したところで）、夢を追い続けています。", answer: "苦労しながらも", category: "N1高级题" },
  // 一、助词与基础语法（101-120）
  { id: 101, stem: "わたしは明日友達____（と / で）映画を見に行きます。", answer: "と", category: "助词与基础语法" },
  { id: 102, stem: "李さんは去年日本____（へ / に）留学しました。", answer: "へ", category: "助词与基础语法" },
  { id: 103, stem: "この本は王さん____（の / が）です。", answer: "の", category: "助词与基础语法" },
  { id: 104, stem: "部屋に猫が二匹____（が / を）います。", answer: "が", category: "助词与基础语法" },
  { id: 105, stem: "お父さんは毎朝新聞____（を / が）読みます。", answer: "を", category: "助词与基础语法" },
  { id: 106, stem: "雨が降っていますから、傘を____（持って / 持たないで）行きましょう。", answer: "から", category: "助词与基础语法" },
  { id: 107, stem: "私たちは図書館____（で / に）勉強しました。", answer: "で", category: "助词与基础语法" },
  { id: 108, stem: "このペンはだれ____（の / が）ですか？", answer: "の", category: "助词与基础语法" },
  { id: 109, stem: "王さんは会社____（へ / に）勤めています。", answer: "に", category: "助词与基础语法" },
  { id: 110, stem: "友達に手紙____（を / が）書きます。", answer: "を", category: "助词与基础语法" },
  { id: 111, stem: "李さんは日本語____（が / を）上手です。", answer: "が", category: "助词与基础语法" },
  { id: 112, stem: "お茶を____（飲みます / 食べます）か。", answer: "飲みます", category: "助词与基础语法" },
  { id: 113, stem: "この店はいつも人____（が / で）多いです。", answer: "が", category: "助词与基础语法" },
  { id: 114, stem: "昨日、私は公園____（で / に）散歩しました。", answer: "で", category: "助词与基础语法" },
  { id: 115, stem: "母は毎日料理____（を / が）作ります。", answer: "を", category: "助词与基础语法" },
  { id: 116, stem: "この傘は____（私 / 私の）です。", answer: "私の", category: "助词与基础语法" },
  { id: 117, stem: "弟は自転車____（で / に）学校へ行きます。", answer: "で", category: "助词与基础语法" },
  { id: 118, stem: "今朝、卵____（を / が）食べました。", answer: "を", category: "助词与基础语法" },
  { id: 119, stem: "犬が____（二匹 / 二本）います。", answer: "二匹", category: "助词与基础语法" },
  { id: 120, stem: "あの人は____（先生 / 学生）です。", answer: "先生", category: "助词与基础语法" },
  // 二、动词变形与时态（121-140）
  { id: 121, stem: "昨日、私は友達と映画を____（見る / 見た）。", answer: "見た", category: "动词变形与时态" },
  { id: 122, stem: "今、母は料理を____（作る / 作っている）。", answer: "作っている", category: "动词变形与时态" },
  { id: 123, stem: "明日、図書館へ本を____（借りる / 借りに）行きます。", answer: "借りに", category: "动词变形与时态" },
  { id: 124, stem: "李さんは毎日 7 時に起きて、朝ごはんを____（食べる / 食べた）。", answer: "食べる", category: "动词变形与时态" },
  { id: 125, stem: "窓を____（開ける / 開け）てください。", answer: "開け", category: "动词变形与时态" },
  { id: 126, stem: "昨日の夜、雨が____（降る / 降った）そうです。", answer: "降った", category: "动词变形与时态" },
  { id: 127, stem: "王さんはもう日本へ____（行く / 行った）。", answer: "行った", category: "动词变形与时态" },
  { id: 128, stem: "この本はもう____（読む / 読み）終わりました。", answer: "読み", category: "动词变形与时态" },
  { id: 129, stem: "私は友達に電話を____（かける / かけ）ます。", answer: "かけ", category: "动词变形与时态" },
  { id: 130, stem: "李さんは毎日自転車で学校へ____（通う / 通った）。", answer: "通う", category: "动词变形与时态" },
  { id: 131, stem: "昨日、友達と公園でピクニックを____（する / した）。", answer: "した", category: "动词变形与时态" },
  { id: 132, stem: "今、父は新聞を____（読む / 読んでいる）。", answer: "読んでいる", category: "动词变形与时态" },
  { id: 133, stem: "明日、映画を____（見る / 見に）行きましょう。", answer: "見に", category: "动词变形与时态" },
  { id: 134, stem: "王さんは毎日図書館で本を____（借りる / 借りた）。", answer: "借りる", category: "动词变形与时态" },
  { id: 135, stem: "部屋を____（掃除する / 掃除して）から、出かけます。", answer: "掃除して", category: "动词变形与时态" },
  { id: 136, stem: "昨日の試験は難しすぎて、合格でき____（ない / なかった）。", answer: "なかった", category: "动词变形与时态" },
  { id: 137, stem: "私はもうご飯を____（食べる / 食べた）。", answer: "食べた", category: "动词变形与时态" },
  { id: 138, stem: "李さんは毎日図書館へ____（行く / 行って）本を借ります。", answer: "行って", category: "动词变形与时态" },
  { id: 139, stem: "この本は面白くて、読み____（始める / 始めた）。", answer: "始めた", category: "动词变形与时态" },
  { id: 140, stem: "明日、友達とサッカーを____（する / した）予定です。", answer: "する", category: "动词变形与时态" },
  // 三、句型与表达（141-160）
  { id: 141, stem: "この料理は____（あまり / とても）辛くて、食べられません。", answer: "あまり", category: "句型与表达" },
  { id: 142, stem: "王さんは日本語が____（少し / とても）上手です。", answer: "とても", category: "句型与表达" },
  { id: 143, stem: "この本は____（とても / ほとんど）面白いです。", answer: "とても", category: "句型与表达" },
  { id: 144, stem: "私は歌が好きで、よく歌を____（歌う / 歌って）います。", answer: "歌って", category: "句型与表达" },
  { id: 145, stem: "雨が降っていますから、傘を____（持って / 持たないで）行きましょう。", answer: "持って", category: "句型与表达" },
  { id: 146, stem: "李さんは日本へ行って、日本語を____（習う / 習って）ます。", answer: "習う", category: "句型与表达" },
  { id: 147, stem: "この映画は____（とても / あまり）面白いです。", answer: "とても", category: "句型与表达" },
  { id: 148, stem: "明日は休みですから、家で____（ゆっくり / 急いで）休みます。", answer: "ゆっくり", category: "句型与表达" },
  { id: 149, stem: "王さんは毎日図書館で本を____（読む / 読んで）います。", answer: "読んで", category: "句型与表达" },
  { id: 150, stem: "このスカートは____（あまり / すこし）高くて、買いません。", answer: "あまり", category: "句型与表达" },
  { id: 151, stem: "私は友達と____（映画を見る / 映画を見た）予定です。", answer: "映画を見る", category: "句型与表达" },
  { id: 152, stem: "李さんは日本語の授業に____（出る / 出た）ことができます。", answer: "出る", category: "句型与表达" },
  { id: 153, stem: "この本は____（面白くて / 面白くなくて）、読み終わりました。", answer: "面白くて", category: "句型与表达" },
  { id: 154, stem: "明日、友達と____（パーティーに行く / パーティーに行った）つもりです。", answer: "パーティーに行く", category: "句型与表达" },
  { id: 155, stem: "王さんは毎日自転車で____（学校へ通う / 学校へ通った）。", answer: "学校へ通う", category: "句型与表达" },
  { id: 156, stem: "この店は____（人気がある / 人気がない）から、いつも込んでいます。", answer: "人気がある", category: "句型与表达" },
  { id: 157, stem: "私は歌が好きで、____（よく歌う / あまり歌わない）。", answer: "よく歌う", category: "句型与表达" },
  { id: 158, stem: "李さんは日本へ行って、____（日本語を勉強する / 日本語を話す）そうです。", answer: "日本語を勉強する", category: "句型与表达" },
  { id: 159, stem: "明日は休みですから、____（家でゆっくり休む / 外で遊ぶ）つもりです。", answer: "家でゆっくり休む", category: "句型与表达" },
  { id: 160, stem: "このスカートは高くて、____（買う / 買わない）。", answer: "買わない", category: "句型与表达" },
  // 四、敬语与词汇（161-180）
  { id: 161, stem: "お客様、こちらへ____（どうぞ / いただきます）。", answer: "どうぞ", category: "敬语与词汇" },
  { id: 162, stem: "社長はもう____（お帰りになりました / 帰りました）。", answer: "お帰りになりました", category: "敬语与词汇" },
  { id: 163, stem: "お父さんは銀行で____（お勤めです / 勤めます）。", answer: "お勤めです", category: "敬语与词汇" },
  { id: 164, stem: "先生、この問題を____（教えてください / 教えます）。", answer: "教えてください", category: "敬语与词汇" },
  { id: 165, stem: "お母さん、ご飯が____（できました / 作りました）。", answer: "できました", category: "敬语与词汇" },
  { id: 166, stem: "お客様、少々____（お待ちください / 待ちます）。", answer: "お待ちください", category: "敬语与词汇" },
  { id: 167, stem: "社長、これは今日の____（報告書です / 報告します）。", answer: "報告書です", category: "敬语与词汇" },
  { id: 168, stem: "先生、この本を____（貸してください / 貸します）。", answer: "貸してください", category: "敬语与词汇" },
  { id: 169, stem: "お父さんは明日____（出張に行きます / 出張します）。", answer: "出張に行きます", category: "敬语与词汇" },
  { id: 170, stem: "お客様、____（いらっしゃいませ / 来ました）。", answer: "いらっしゃいませ", category: "敬语与词汇" },
  { id: 171, stem: "社長は今会議中ですから、少々____（お待ちいただけますか / 待ってください）。", answer: "お待ちいただけますか", category: "敬语与词汇" },
  { id: 172, stem: "先生、この作文を____（直してください / 直します）。", answer: "直してください", category: "敬语与词汇" },
  { id: 173, stem: "お母さん、私は学校から____（帰ります / 帰りました）。", answer: "帰ります", category: "敬语与词汇" },
  { id: 174, stem: "お客様、こちらの商品を____（ご覧ください / 見てください）。", answer: "ご覧ください", category: "敬语与词汇" },
  { id: 175, stem: "社長は明日____（日本へ行きます / 日本へ行きました）。", answer: "日本へ行きます", category: "敬语与词汇" },
  { id: 176, stem: "先生、この本を____（読んでください / 読みます）。", answer: "読んでください", category: "敬语与词汇" },
  { id: 177, stem: "お父さんは毎日____（会社へ行きます / 会社に行きます）。", answer: "会社へ行きます", category: "敬语与词汇" },
  { id: 178, stem: "お客様、____（ご注文は決まりましたか / 注文しますか）。", answer: "ご注文は決まりましたか", category: "敬语与词汇" },
  { id: 179, stem: "社長は今____（電話をしています / 電話します）。", answer: "電話をしています", category: "敬语与词汇" },
  { id: 180, stem: "先生、この問題を____（説明してください / 説明します）。", answer: "説明してください", category: "敬语与词汇" },
  // 五、综合应用（181-200）
  { id: 181, stem: "この本は____（面白い / 面白くない）から、読みたいです。", answer: "面白い", category: "综合应用" },
  { id: 182, stem: "李さんは日本へ行って、____（日本語を習う / 日本語を勉強する）つもりです。", answer: "日本語を勉強する", category: "综合应用" },
  { id: 183, stem: "雨が降っていますから、____（傘を持って行きましょう / 傘を持たないで行きましょう）。", answer: "傘を持って行きましょう", category: "综合应用" },
  { id: 184, stem: "王さんは毎日図書館で____（本を読む / 本を書く）。", answer: "本を読む", category: "综合应用" },
  { id: 185, stem: "このスカートは____（高すぎる / 安すぎる）ので、買いません。", answer: "高すぎる", category: "综合应用" },
  { id: 186, stem: "私は友達と____（映画を見る / 映画を作る）予定です。", answer: "映画を見る", category: "综合应用" },
  { id: 187, stem: "李さんは日本語の授業に____（出る / 休む）ことができます。", answer: "出る", category: "综合应用" },
  { id: 188, stem: "この本は____（面白くて / 面白くなくて）、読み終わりました。", answer: "面白くて", category: "综合应用" },
  { id: 189, stem: "明日、友達と____（パーティーに行く / パーティーをする）つもりです。", answer: "パーティーに行く", category: "综合应用" },
  { id: 190, stem: "王さんは毎日自転車で____（学校へ通う / 学校へ帰る）。", answer: "学校へ通う", category: "综合应用" },
  { id: 191, stem: "この店は____（人気がある / 人気がない）から、いつも込んでいます。", answer: "人気がある", category: "综合应用" },
  { id: 192, stem: "私は歌が好きで、____（よく歌う / 歌わない）。", answer: "よく歌う", category: "综合应用" },
  { id: 193, stem: "李さんは日本へ行って、____（日本語を勉強する / 日本語を話す）そうです。", answer: "日本語を勉強する", category: "综合应用" },
  { id: 194, stem: "明日は休みですから、____（家でゆっくり休む / 外で運动する）つもりです。", answer: "家でゆっくり休む", category: "综合应用" },
  { id: 195, stem: "このスカートは高くて、____（買う / 売る）。", answer: "売る", category: "综合应用" },
  { id: 196, stem: "友達に____（会う / 会った）ために、駅へ行きます。", answer: "会う", category: "综合应用" },
  { id: 197, stem: "李さんは毎日図書館へ____（行く / 来る）本を借ります。", answer: "行って", category: "综合应用" },
  { id: 198, stem: "この映画は____（面白すぎる / つまらなすぎる）ので、見たいです。", answer: "面白すぎる", category: "综合应用" },
  { id: 199, stem: "王さんは日本語が____（上手だ / 下手だ）から、先生になりました。", answer: "上手だ", category: "综合应用" },
  { id: 200, stem: "私は友達と____（旅行に行く / 旅行した）予定です。", answer: "旅行に行く", category: "综合应用" },
];

function selectRandomQuestions(questions: Question[], count: number): Question[] {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function FillInPracticePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const filteredQuestions = selectedCategory === 'all' 
      ? allQuestions 
      : allQuestions.filter(q => q.category === selectedCategory);
    setQuestions(selectRandomQuestions(filteredQuestions, 20));
  }, [selectedCategory]);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(question => {
      const userInput = (answers[question.id] || '').trim();
      if (userInput === question.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleReset = () => {
    const filteredQuestions = selectedCategory === 'all' 
      ? allQuestions 
      : allQuestions.filter(q => q.category === selectedCategory);
    setQuestions(selectRandomQuestions(filteredQuestions, 20));
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const categories = [
    { id: 'all', name: '全部题目' },
    { id: 'N5基础题', name: 'N5基础题' },
    { id: 'N4基础进阶题', name: 'N4基础进阶题' },
    { id: 'N3中级题', name: 'N3中级题' },
    { id: 'N2中高级题', name: 'N2中高级题' },
    { id: 'N1高级题', name: 'N1高级题' },
    { id: '助词与基础语法', name: '助词与基础语法' },
    { id: '动词变形与时态', name: '动词变形与时态' },
    { id: '句型与表达', name: '句型与表达' },
    { id: '敬语与词汇', name: '敬语与词汇' },
    { id: '综合应用', name: '综合应用' }
  ];

  const totalQuestions = allQuestions.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">填空题练习</h1>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">选择题目类型：</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-2 w-64"
          disabled={showResults}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {questions.map((question, index) => (
        <div key={question.id} className="mb-6">
          <p className="mb-2">{index + 1}. {question.stem}</p>
          <input
            type="text"
            className="border rounded px-2 py-1 w-64"
            value={answers[question.id] || ''}
            onChange={e => handleAnswerChange(question.id, e.target.value)}
            disabled={showResults}
          />
          {showResults && (
            <p className={`mt-2 ${answers[question.id]?.trim() === question.answer ? 'text-green-600' : 'text-red-600'}`}>
              正确答案: {question.answer}
            </p>
          )}
        </div>
      ))}
      <div className="mt-6">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            提交答案
          </button>
        ) : (
          <div>
            <p className="mb-4">得分: {score}/{questions.length}</p>
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              重新开始
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 