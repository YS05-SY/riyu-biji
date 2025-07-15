'use client';

import React, { useState, useEffect } from 'react';

interface Question {
  id: number;
  stem: string;
  options: { [key: string]: string };
  correctAnswer: string;
}

const allQuestions: Question[] = [
  { id: 1, stem: '私は毎日（　　）を飲みます。', options: { A: 'コーヒー', B: 'コーヒーで', C: 'コーヒーに', D: 'コーヒーが' }, correctAnswer: 'A' },
  { id: 2, stem: '昨日、友達と映画を（　　）。', options: { A: '見ます', B: '見ました', C: '見ています', D: '見ようとします' }, correctAnswer: 'B' },
  { id: 3, stem: 'この本は（　　）面白いです。', options: { A: 'とても', B: 'たくさん', C: '少しも', D: 'ずっと' }, correctAnswer: 'A' },
  { id: 4, stem: '夏休みに海へ行きたい（　　）思っています。', options: { A: 'と', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'A' },
  { id: 5, stem: '李さんは日本語が上手ですから、日本の小説を（　　）読めます。', options: { A: '簡単に', B: '簡単な', C: '簡単だ', D: '簡単で' }, correctAnswer: 'A' },
  { id: 6, stem: 'お父さんは毎日（　　）帰ります。', options: { A: '遅くて', B: '遅い', C: '遅く', D: '遅いで' }, correctAnswer: 'C' },
  { id: 7, stem: 'このパソコンは（　　）安いです。', options: { A: 'あまり', B: 'あまりに', C: 'あまりにも', D: 'あまりない' }, correctAnswer: 'A' },
  { id: 8, stem: '友達に（　　）、日本のアニメが好きだと言いました。', options: { A: '対して', B: 'とって', C: 'よって', D: 'ついて' }, correctAnswer: 'D' },
  { id: 9, stem: '授業が終わったら、図書館へ（　　）行きます。', options: { A: '本を借りに', B: '本を借りて', C: '本を借りた', D: '本を借りたい' }, correctAnswer: 'A' },
  { id: 10, stem: 'このバスは駅（　　）通ります。', options: { A: 'へ', B: 'に', C: 'を', D: 'で' }, correctAnswer: 'C' },
  { id: 11, stem: '今朝、（　　）を食べました。', options: { A: '卵', B: '卵で', C: '卵に', D: '卵が' }, correctAnswer: 'A' },
  { id: 12, stem: '友達に（　　）を贈りました。', options: { A: '花', B: '花で', C: '花に', D: '花が' }, correctAnswer: 'A' },
  { id: 13, stem: '昨日、スーパーで（　　）を買いました。', options: { A: '果物', B: '果物で', C: '果物に', D: '果物が' }, correctAnswer: 'A' },
  { id: 14, stem: '私は（　　）が好きです。', options: { A: '読む', B: '読んで', C: '読み', D: '読書' }, correctAnswer: 'D' },
  { id: 15, stem: 'この店で（　　）を売っています。', options: { A: '本', B: '本で', C: '本に', D: '本が' }, correctAnswer: 'A' },
  { id: 16, stem: '彼は（　　）を持っています。', options: { A: '傘', B: '傘で', C: '傘に', D: '傘が' }, correctAnswer: 'A' },
  { id: 17, stem: '毎日（　　）を聞きます。', options: { A: '音楽', B: '音楽で', C: '音楽に', D: '音楽が' }, correctAnswer: 'A' },
  { id: 18, stem: '私は（　　）を着ています。', options: { A: '服', B: '服で', C: '服に', D: '服が' }, correctAnswer: 'A' },
  { id: 19, stem: '朝、（　　）を飲みます。', options: { A: 'ジュース', B: 'ジュースで', C: 'ジュースに', D: 'ジュースが' }, correctAnswer: 'A' },
  { id: 20, stem: '明日、（　　）に行きます。', options: { A: '公園', B: '公園で', C: '公園に', D: '公園が' }, correctAnswer: 'A' },
  { id: 21, stem: '私は（　　）を書きます。', options: { A: '手紙', B: '手紙で', C: '手紙に', D: '手紙が' }, correctAnswer: 'A' },
  { id: 22, stem: 'この部屋に（　　）があります。', options: { A: '机', B: '机で', C: '机に', D: '机が' }, correctAnswer: 'A' },
  { id: 23, stem: '彼は（　　）を見ました。', options: { A: '映画', B: '映画で', C: '映画に', D: '映画が' }, correctAnswer: 'A' },
  { id: 24, stem: '私は（　　）を持っています。', options: { A: '時計', B: '時計で', C: '時計に', D: '時計が' }, correctAnswer: 'A' },
  { id: 25, stem: '毎日（　　）を食べます。', options: { A: 'ご飯', B: 'ご飯で', C: 'ご飯に', D: 'ご飯が' }, correctAnswer: 'A' },
  { id: 26, stem: '明日、（　　）に会います。', options: { A: '友達', B: '友達で', C: '友達に', D: '友達が' }, correctAnswer: 'C' },
  { id: 27, stem: '私は（　　）を習います。', options: { A: '英語', B: '英語で', C: '英語に', D: '英語が' }, correctAnswer: 'A' },
  { id: 28, stem: 'この店で（　　）を買いました。', options: { A: '靴', B: '靴で', C: '靴に', D: '靴が' }, correctAnswer: 'A' },
  { id: 29, stem: '彼は（　　）を歌います。', options: { A: '歌', B: '歌で', C: '歌に', D: '歌が' }, correctAnswer: 'A' },
  { id: 30, stem: '私は（　　）を飲みます。', options: { A: '水', B: '水で', C: '水に', D: '水が' }, correctAnswer: 'A' },
  { id: 31, stem: '今朝、（　　）を食べました。', options: { A: 'パン', B: 'パンで', C: 'パンに', D: 'パンが' }, correctAnswer: 'A' },
  { id: 32, stem: '友達に（　　）を送りました。', options: { A: 'メール', B: 'メールで', C: 'メールに', D: 'メールが' }, correctAnswer: 'A' },
  { id: 33, stem: '昨日、スーパーで（　　）を買いました。', options: { A: '野菜', B: '野菜で', C: '野菜に', D: '野菜が' }, correctAnswer: 'A' },
  { id: 34, stem: '私は（　　）が好きです。', options: { A: '走る', B: '走って', C: '走り', D: '走行' }, correctAnswer: 'C' },
  { id: 35, stem: 'この店で（　　）を売っています。', options: { A: 'バッグ', B: 'バッグで', C: 'バッグに', D: 'バッグが' }, correctAnswer: 'A' },
  { id: 36, stem: '彼は（　　）を持っています。', options: { A: '鍵', B: '鍵で', C: '鍵に', D: '鍵が' }, correctAnswer: 'A' },
  { id: 37, stem: '毎日（　　）を聞きます。', options: { A: 'ニュース', B: 'ニュースで', C: 'ニュースに', D: 'ニュースが' }, correctAnswer: 'A' },
  { id: 38, stem: '私は（　　）を着ています。', options: { A: 'コート', B: 'コートで', C: 'コートに', D: 'コートが' }, correctAnswer: 'A' },
  { id: 39, stem: '朝、（　　）を飲みます。', options: { A: 'コーヒー', B: 'コーヒーで', C: 'コーヒーに', D: 'コーヒーが' }, correctAnswer: 'A' },
  { id: 40, stem: '明日、（　　）に行きます。', options: { A: '図書館', B: '図書館で', C: '図書館に', D: '図書館が' }, correctAnswer: 'A' },
  { id: 41, stem: '私は（　　）を書きます。', options: { A: '日記', B: '日記で', C: '日記に', D: '日記が' }, correctAnswer: 'A' },
  { id: 42, stem: 'この部屋に（　　）があります。', options: { A: '椅子', B: '椅子で', C: '椅子に', D: '椅子が' }, correctAnswer: 'A' },
  { id: 43, stem: '彼は（　　）を見ました。', options: { A: 'テレビ', B: 'テレビで', C: 'テレビに', D: 'テレビが' }, correctAnswer: 'A' },
  { id: 44, stem: '私は（　　）を持っています。', options: { A: '傘', B: '傘で', C: '傘に', D: '傘が' }, correctAnswer: 'A' },
  { id: 45, stem: '毎日（　　）を食べます。', options: { A: '肉', B: '肉で', C: '肉に', D: '肉が' }, correctAnswer: 'A' },
  { id: 46, stem: '明日、（　　）に会います。', options: { A: '家族', B: '家族で', C: '家族に', D: '家族が' }, correctAnswer: 'C' },
  { id: 47, stem: '私は（　　）を習います。', options: { A: '日本語', B: '日本語で', C: '日本語に', D: '日本語が' }, correctAnswer: 'A' },
  { id: 48, stem: 'この店で（　　）を買いました。', options: { A: '帽子', B: '帽子で', C: '帽子に', D: '帽子が' }, correctAnswer: 'A' },
  { id: 49, stem: '彼は（　　）を歌います。', options: { A: '曲', B: '曲で', C: '曲に', D: '曲が' }, correctAnswer: 'A' },
  { id: 50, stem: '私は（　　）を飲みます。', options: { A: 'ミルク', B: 'ミルクで', C: 'ミルクに', D: 'ミルクが' }, correctAnswer: 'A' },
  { id: 51, stem: '今朝、（　　）を食べました。', options: { A: 'お粥', B: 'お粥で', C: 'お粥に', D: 'お粥が' }, correctAnswer: 'A' },
  { id: 52, stem: '友達に（　　）を貸しました。', options: { A: '本', B: '本で', C: '本に', D: '本が' }, correctAnswer: 'A' },
  { id: 53, stem: '昨日、スーパーで（　　）を買いました。', options: { A: 'パスタ', B: 'パスタで', C: 'パスタに', D: 'パスタが' }, correctAnswer: 'A' },
  { id: 54, stem: '私は（　　）が好きです。', options: { A: '泳ぐ', B: '泳いで', C: '泳ぎ', D: '水泳' }, correctAnswer: 'C' },
  { id: 55, stem: 'この店で（　　）を売っています。', options: { A: '時計', B: '時計で', C: '時計に', D: '時計が' }, correctAnswer: 'A' },
  { id: 56, stem: '彼は（　　）を持っています。', options: { A: '傘', B: '傘で', C: '傘に', D: '傘が' }, correctAnswer: 'A' },
  { id: 57, stem: '毎日（　　）を聞きます。', options: { A: '音楽', B: '音楽で', C: '音乐に', D: '音楽が' }, correctAnswer: 'A' },
  { id: 58, stem: '私は（　　）を着ています。', options: { A: '靴', B: '靴で', C: '靴に', D: '靴が' }, correctAnswer: 'A' },
  { id: 59, stem: '朝、（　　）を飲みます。', options: { A: '緑茶', B: '緑茶で', C: '緑茶に', D: '緑茶が' }, correctAnswer: 'A' },
  { id: 60, stem: '明日、（　　）に行きます。', options: { A: '病院', B: '病院で', C: '病院に', D: '病院が' }, correctAnswer: 'A' },
  { id: 61, stem: '私は（　　）を書きます。', options: { A: 'レポート', B: 'レポートで', C: 'レポートに', D: 'レポートが' }, correctAnswer: 'A' },
  { id: 62, stem: 'この部屋に（　　）があります。', options: { A: 'ソファー', B: 'ソファーで', C: 'ソファーに', D: 'ソファーが' }, correctAnswer: 'A' },
  { id: 63, stem: '彼は（　　）を見ました。', options: { A: '映画館', B: '映画館で', C: '映画館に', D: '映画館が' }, correctAnswer: 'A' },
  { id: 64, stem: '私は（　　）を持っています。', options: { A: '携帯電話', B: '携帯電話で', C: '携帯電話に', D: '携帯電話が' }, correctAnswer: 'A' },
  { id: 65, stem: '毎日（　　）を食べます。', options: { A: '魚', B: '魚で', C: '魚に', D: '魚が' }, correctAnswer: 'A' },
  { id: 66, stem: '明日、（　　）に会います。', options: { A: '先生', B: '先生で', C: '先生に', D: '先生が' }, correctAnswer: 'C' },
  { id: 67, stem: '私は（　　）を習います。', options: { A: '数学', B: '数学で', C: '数学に', D: '数学が' }, correctAnswer: 'A' },
  { id: 68, stem: 'この店で（　　）を買いました。', options: { A: '靴下', B: '靴下で', C: '靴下に', D: '靴下が' }, correctAnswer: 'A' },
  { id: 69, stem: '彼は（　　）を歌います。', options: { A: 'ポップソング', B: 'ポップソングで', C: 'ポップソングに', D: 'ポップソングが' }, correctAnswer: 'A' },
  { id: 70, stem: '私は（　　）を飲みます。', options: { A: 'お茶', B: 'お茶で', C: 'お茶に', D: 'お茶が' }, correctAnswer: 'A' },
  { id: 71, stem: '今朝、（　　）を食べました。', options: { A: '焼きたてパン', B: '焼きたてパンで', C: '焼きたてパンに', D: '焼きたてパンが' }, correctAnswer: 'A' },
  { id: 72, stem: '朋友に（　　）を赠りました。', options: { A: 'チョコレート', B: 'チョコレートで', C: 'チョコレートに', D: 'チョコレートが' }, correctAnswer: 'A' },
  { id: 73, stem: '昨日、スーパーで（　　）を買いました。', options: { A: 'パスタ', B: 'パスタで', C: 'パスタに', D: 'パスタが' }, correctAnswer: 'A' },
  { id: 74, stem: '私は（　　）が好きです。', options: { A: '絵を描く', B: '絵を描いて', C: '絵を描き', D: '絵画' }, correctAnswer: 'D' },
  { id: 75, stem: 'この店で（　　）を売っています。', options: { A: 'ペン', B: 'ペンで', C: 'ペンに', D: 'ペンが' }, correctAnswer: 'A' },
  { id: 76, stem: '彼は（　　）を持っています。', options: { A: '傘', B: '傘で', C: '傘に', D: '傘が' }, correctAnswer: 'A' },
  { id: 77, stem: '毎日（　　）を聞きます。', options: { A: 'ラジオ', B: 'ラジオで', C: 'ラジオに', D: 'ラジオが' }, correctAnswer: 'A' },
  { id: 78, stem: '私は（　　）を着ています。', options: { A: 'スカート', B: 'スカートで', C: 'スカートに', D: 'スカートが' }, correctAnswer: 'A' },
  { id: 79, stem: '朝、（　　）を飲みます。', options: { A: 'コーヒー', B: 'コーヒーで', C: 'コーヒーに', D: 'コーヒーが' }, correctAnswer: 'A' },
  { id: 80, stem: '明日、（　　）に行きます。', options: { A: '駅', B: '駅で', C: '駅に', D: '駅が' }, correctAnswer: 'A' },
  { id: 81, stem: '私は（　　）を書きます。', options: { A: '手紙', B: '手紙で', C: '手紙に', D: '手紙が' }, correctAnswer: 'A' },
  { id: 82, stem: 'この部屋に（　　）があります。', options: { A: 'ベッド', B: 'ベッドで', C: 'ベッドに', D: 'ベッドが' }, correctAnswer: 'A' },
  { id: 83, stem: '彼は（　　）を見ました。', options: { A: 'ビデオ', B: 'ビデオで', C: 'ビデオに', D: 'ビデオが' }, correctAnswer: 'A' },
  { id: 84, stem: '私は（　　）を持っています。', options: { A: 'パソコン', B: 'パソコンで', C: 'パソコンに', D: 'パソコンが' }, correctAnswer: 'A' },
  { id: 85, stem: '毎日（　　）を食べます。', options: { A: 'パンケーキ', B: 'パンケーキで', C: 'パンケーキに', D: 'パンケーキが' }, correctAnswer: 'A' },
  { id: 86, stem: '明日、（　　）に会います。', options: { A: 'お客様', B: 'お客様で', C: 'お客様に', D: 'お客様が' }, correctAnswer: 'C' },
  { id: 87, stem: '私は（　　）を習います。', options: { A: '歴史', B: '歴史で', C: '歴史に', D: '歴史が' }, correctAnswer: 'A' },
  { id: 88, stem: 'この店で（　　）を買いました。', options: { A: 'サンダル', B: 'サンダルで', C: 'サンダルに', D: 'サンダルが' }, correctAnswer: 'A' },
  { id: 89, stem: '彼は（　　）を歌います。', options: { A: 'アニメソング', B: 'アニメソングで', C: 'アニメソングに', D: 'アニメソングが' }, correctAnswer: 'A' },
  { id: 90, stem: '私は（　　）を飲みます。', options: { A: 'ソーダ', B: 'ソーダで', C: 'ソーダに', D: 'ソーダが' }, correctAnswer: 'A' },
  { id: 91, stem: '私（　）日本語を勉強しています。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'A' },
  { id: 92, stem: '部屋（　）窓が二つあります。', options: { A: 'は', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'D' },
  { id: 93, stem: 'この本（　）私のです。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'A' },
  { id: 94, stem: '猫（　）白い毛をしています。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'A' },
  { id: 95, stem: '誰（　）窓を閉めましたか。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'B' },
  { id: 96, stem: 'ご飯を（　）食べます。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'C' },
  { id: 97, stem: '鳥が空（　）飛んでいます。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'C' },
  { id: 98, stem: 'テレビ（　）見ます。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'C' },
  { id: 99, stem: '友達（　）手紙を書きます。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'C' },
  { id: 100, stem: '子供が公園（　）走っています。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'C' },
  { id: 101, stem: '学校（　）8時に行きます。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'D' },
  { id: 102, stem: '誕生日にケーキ（　）プレゼントをもらいました。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'C' },
  { id: 103, stem: 'お父さん（　）電話をかけました。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'D' },
  { id: 104, stem: '毎日朝6時（　）起きます。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'D' },
  { id: 105, stem: '日本（　）住んでいます。', options: { A: 'は', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'D' },
  { id: 106, stem: '教室（　）勉強します。', options: { A: 'は', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'C' },
  { id: 107, stem: 'ペン（　）字を書きます。', options: { A: 'は', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'C' },
  { id: 108, stem: '牛乳（　）作ったケーキです。', options: { A: 'は', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'C' },
  { id: 109, stem: '一人（　）食事をします。', options: { A: 'は', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'C' },
  { id: 110, stem: '東京（　）仕事をしています。', options: { A: 'は', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'C' },
  { id: 111, stem: '朝9時（　）午後5時まで働きます。', options: { A: 'は', B: 'が', C: 'で', D: 'から' }, correctAnswer: 'D' },
  { id: 112, stem: '日本（　）中国まで飛行機で2時間かかります。', options: { A: 'は', B: 'が', C: 'で', D: 'から' }, correctAnswer: 'D' },
  { id: 113, stem: 'この本は弟（　）もらいました。', options: { A: 'は', B: 'が', C: 'で', D: 'から' }, correctAnswer: 'D' },
  { id: 114, stem: '月曜日（　）金曜日まで学校です。', options: { A: 'は', B: 'が', C: 'で', D: 'から' }, correctAnswer: 'D' },
  { id: 115, stem: '家（　）駅まで10分かかります。', options: { A: 'は', B: 'が', C: 'で', D: 'から' }, correctAnswer: 'D' },
  { id: 116, stem: '私はりんご（　）バナナが好きです。', options: { A: 'は', B: 'が', C: 'と', D: 'に' }, correctAnswer: 'C' },
  { id: 117, stem: '部屋に机（　）椅子があります。', options: { A: 'は', B: 'が', C: 'と', D: 'に' }, correctAnswer: 'C' },
  { id: 118, stem: '夏には海（　）山へ行きたいです。', options: { A: 'は', B: 'が', C: 'と', D: 'に' }, correctAnswer: 'C' },
  { id: 119, stem: '果物（　）野菜をたくさん食べます。', options: { A: 'は', B: 'が', C: 'や', D: 'に' }, correctAnswer: 'C' },
  { id: 120, stem: 'コーヒー（　）紅茶を飲みますか。', options: { A: 'は', B: 'が', C: 'と', D: 'か' }, correctAnswer: 'D' },
  { id: 121, stem: '公園（　）散歩に行きます。', options: { A: 'へ', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'A' },
  { id: 122, stem: '映画館（　）映画を見ます。', options: { A: 'へ', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'C' },
  { id: 123, stem: '友達（　）会いに行きます。', options: { A: 'へ', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'D' },
  { id: 124, stem: '学校（　）行く途中で雨が降りました。', options: { A: 'へ', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'A' },
  { id: 125, stem: 'カフェ（　）待っています。', options: { A: 'へ', B: 'が', C: 'で', D: 'に' }, correctAnswer: 'C' },
  { id: 126, stem: '私（　）日本語が少しわかります。', options: { A: 'も', B: 'は', C: 'が', D: 'に' }, correctAnswer: 'B' },
  { id: 127, stem: '弟（　）大学生です。', options: { A: 'も', B: 'は', C: 'が', D: 'に' }, correctAnswer: 'B' },
  { id: 128, stem: 'リンゴ（　）バナナも好きです。', options: { A: 'も', B: 'は', C: 'が', D: 'に' }, correctAnswer: 'A' },
  { id: 129, stem: '猫（　）犬もいます。', options: { A: 'も', B: 'は', C: 'が', D: 'に' }, correctAnswer: 'A' },
  { id: 130, stem: 'この本（　）面白いです。', options: { A: 'も', B: 'は', C: 'が', D: 'に' }, correctAnswer: 'B' },
  { id: 131, stem: 'これは私（　）本です。', options: { A: 'も', B: 'は', C: 'の', D: 'に' }, correctAnswer: 'C' },
  { id: 132, stem: '母（　）誕生日は明日です。', options: { A: 'も', B: 'は', C: 'の', D: 'に' }, correctAnswer: 'C' },
  { id: 133, stem: '赤い（　）服が欲しいです。', options: { A: 'も', B: 'は', C: 'の', D: 'に' }, correctAnswer: 'C' },
  { id: 134, stem: '私（　）友達は大学生です。', options: { A: 'も', B: 'は', C: 'の', D: 'に' }, correctAnswer: 'C' },
  { id: 135, stem: 'これは教室（　）窓です。', options: { A: 'も', B: 'は', C: 'の', D: 'に' }, correctAnswer: 'C' },
  { id: 136, stem: '日本は中国（　）狭いです。', options: { A: 'より', B: 'ほど', C: 'まで', D: 'に' }, correctAnswer: 'A' },
  { id: 137, stem: '夏はあまり暑く（　）ありません。', options: { A: 'より', B: 'ほど', C: 'まで', D: 'に' }, correctAnswer: 'B' },
  { id: 138, stem: '試験は午後3時（　）終わります。', options: { A: 'より', B: 'ほど', C: 'まで', D: 'に' }, correctAnswer: 'C' },
  { id: 139, stem: '彼は私（　）背が高いです。', options: { A: 'より', B: 'ほど', C: 'まで', D: 'に' }, correctAnswer: 'A' },
  { id: 140, stem: 'この本はあまり面白く（　）ありません。', options: { A: 'より', B: 'ほど', C: 'まで', D: 'に' }, correctAnswer: 'B' },
  { id: 141, stem: 'バス（　）乗って学校へ行きます。', options: { A: 'に', B: 'で', C: 'へ', D: 'を' }, correctAnswer: 'A' },
  { id: 142, stem: 'お金（　）買います。', options: { A: 'に', B: 'で', C: 'へ', D: 'を' }, correctAnswer: 'B' },
  { id: 143, stem: '窓（　）外を見ます。', options: { A: 'に', B: 'で', C: 'から', D: 'を' }, correctAnswer: 'C' },
  { id: 144, stem: 'コーヒー（　）砂糖を入れます。', options: { A: 'に', B: 'で', C: 'へ', D: 'を' }, correctAnswer: 'A' },
  { id: 145, stem: '紙（　）字を書きます。', options: { A: 'に', B: 'で', C: 'へ', D: 'を' }, correctAnswer: 'A' },
  { id: 146, stem: '気を（　）ください。', options: { A: 'つけて', B: 'する', C: 'なる', D: 'いる' }, correctAnswer: 'A' },
  { id: 147, stem: '電車に（　）遅れました。', options: { A: 'で', B: 'に', C: 'を', D: 'は' }, correctAnswer: 'B' },
  { id: 148, stem: '日本語が（　）上手になりました。', options: { A: 'ますます', B: 'だんだん', C: 'すこし', D: 'とても' }, correctAnswer: 'A' },
  { id: 149, stem: 'お茶を（　）飲みますか。', options: { A: 'いつも', B: 'たまに', C: 'よく', D: 'を' }, correctAnswer: 'B' },
  { id: 150, stem: '仕事（　）疲れます。', options: { A: 'で', B: 'に', C: 'を', D: 'は' }, correctAnswer: 'A' },
  { id: 151, stem: '先生は明日の会議に（　）そうです。', options: { A: '出席する', B: '出席します', C: '出席になります', D: '出席されます' }, correctAnswer: 'C' },
  { id: 152, stem: '部長は今（　）ところです。', options: { A: 'お帰り', B: 'お帰りになり', C: 'お帰りです', D: 'お帰りになって' }, correctAnswer: 'D' },
  { id: 153, stem: '山田さんは先週（　）いらっしゃいました。', options: { A: '来る', B: '来ます', C: '来られ', D: '来され' }, correctAnswer: 'C' },
  { id: 154, stem: '社長はいつも早く（　）そうです。', options: { A: '勤める', B: '勤めます', C: '勤めになる', D: '勤められる' }, correctAnswer: 'D' },
  { id: 155, stem: '先生がこの本を（　）そうです。', options: { A: '読む', B: '読みます', C: 'お読みになり', D: 'お読みです' }, correctAnswer: 'C' },
  { id: 156, stem: '私は部長に（　）予定です。', options: { A: '会う', B: '会います', C: 'お会いになります', D: 'お目にかかります' }, correctAnswer: 'D' },
  { id: 157, stem: '社長に（　）報告します。', options: { A: '伺って', B: 'お伺いになって', C: 'お伺いして', D: '伺いになって' }, correctAnswer: 'A' },
  { id: 158, stem: '私は明日先生に（　）。', options: { A: '訪ねます', B: 'お邪魔します', C: 'お邪魔になります', D: '邪魔します' }, correctAnswer: 'B' },
  { id: 159, stem: 'この資料を部長に（　）。', options: { A: '渡します', B: 'お渡しします', C: 'お渡しになります', D: '差し上げます' }, correctAnswer: 'D' },
  { id: 160, stem: '私は先生に質問を（　）。', options: { A: 'する', B: 'いたす', C: 'なさる', D: '申し上げる' }, correctAnswer: 'B' },
  { id: 161, stem: 'ご飯は（　）ですか。', options: { A: '召し上がり', B: '食べ', C: 'お食べ', D: 'お食べになり' }, correctAnswer: 'C' },
  { id: 162, stem: 'どうぞこちらへ（　）。', options: { A: 'お越しください', B: '越してください', C: '越されてください', D: '越さないでください' }, correctAnswer: 'A' },
  { id: 163, stem: '失礼ですが、お名前は（　）ですか。', options: { A: 'なん', B: 'どなた', C: 'お何', D: '何様' }, correctAnswer: 'C' },
  { id: 164, stem: 'こちらは社長の（　）です。', options: { A: '奥さん', B: '奥様', C: '妻', D: '夫人' }, correctAnswer: 'B' },
  { id: 165, stem: 'ご用件は（　）ですか。', options: { A: 'なん', B: 'どなた', C: 'お何', D: '何様' }, correctAnswer: 'C' },
  { id: 166, stem: '先生が今日の授業を（　）そうです。', options: { A: '休む', B: '休みます', C: '休まれます', D: 'お休みになります' }, correctAnswer: 'D' },
  { id: 167, stem: '私は部長にこの報告書を（　）。', options: { A: '渡す', B: 'お渡しする', C: '差し上げる', D: 'お渡しになる' }, correctAnswer: 'C' },
  { id: 168, stem: '社長はいま（　）ところです。', options: { A: '会議する', B: '会議になる', C: 'お会議になる', D: 'お会議です' }, correctAnswer: 'C' },
  { id: 169, stem: '私は先生に（　）質問します。', options: { A: 'ご相談', B: 'ご相談になり', C: 'お伺い', D: 'お伺いになり' }, correctAnswer: 'C' },
  { id: 170, stem: 'お客様が（　）そうです。', options: { A: '来る', B: '来ます', C: '来られます', D: 'お越しになります' }, correctAnswer: 'D' },
  { id: 171, stem: '部長が私に（　）。', options: { A: '話します', B: '話されます', C: 'お話しになります', D: 'お話しです' }, correctAnswer: 'C' },
  { id: 172, stem: '私は社長に（　）。', options: { A: '会います', B: 'お会いになります', C: 'お目にかかります', D: 'お目にかかりになります' }, correctAnswer: 'C' },
  { id: 173, stem: '先生が本を（　）。', options: { A: '読みます', B: 'お読みになります', C: 'お読みます', D: '読まれます' }, correctAnswer: 'B' },
  { id: 174, stem: '私はお客様に（　）。', options: { A: '案内する', B: 'お案内する', C: 'お案内になる', D: '案内される' }, correctAnswer: 'B' },
  { id: 175, stem: '社長が来られますから、準備を（　）。', options: { A: 'する', B: 'いたす', C: 'なさる', D: '申し上げる' }, correctAnswer: 'B' },
  { id: 176, stem: '「社長、いつも（　）ご指導いただき、ありがとうございます。」', options: { A: '大変', B: '格別', C: '貴重', D: '立派' }, correctAnswer: 'B' },
  { id: 177, stem: '「こちらこそ、今後とも（　）お願いいたします。」', options: { A: 'どうぞ', B: 'よろしく', C: 'お願い', D: 'ご親切に' }, correctAnswer: 'B' },
  { id: 178, stem: '「ご注文の商品は明日（　）届けます。」', options: { A: '必ず', B: '間違いなく', C: '確実に', D: 'おそらく' }, correctAnswer: 'A' },
  { id: 179, stem: '「お忙しいところを（　）、申し訳ありません。」', options: { A: 'お邪魔して', B: 'お邪魔になって', C: 'お邪魔いたして', D: 'お邪魔なさって' }, correctAnswer: 'C' },
  { id: 180, stem: '「ご家族の皆様に（　）。」', options: { A: 'よろしく', B: 'お元気で', C: 'ご健康を', D: 'お礼を' }, correctAnswer: 'A' },
  { id: 181, stem: '「お茶を（　）どうぞ。」', options: { A: '召し上がって', B: '食べて', C: '飲んで', D: 'お飲みになって' }, correctAnswer: 'A' },
  { id: 182, stem: '「社長はもう（　）そうです。」', options: { A: '帰る', B: 'お帰りになる', C: 'お帰りです', D: 'お帰りになって' }, correctAnswer: 'B' },
  { id: 183, stem: 'この本は先生が（　）ものです。', options: { A: '書く', B: '書かれる', C: 'お書きになる', D: 'お書きです' }, correctAnswer: 'C' },
  { id: 184, stem: '「私は部長に（　）。', options: { A: '報告する', B: 'お報告する', C: 'お報告になる', D: '報告される' }, correctAnswer: 'B' },
  { id: 185, stem: '「ご用件は（　）ですか。」', options: { A: '何', B: 'どなた', C: 'お何', D: '何様' }, correctAnswer: 'C' },
  { id: 186, stem: '「お客様が（　）そうです。」', options: { A: '来る', B: '来ます', C: '来られます', D: 'お越しになります' }, correctAnswer: 'D' },
  { id: 187, stem: '「社長に（　）質問します。」', options: { A: '伺って', B: 'お伺いになって', C: 'お伺いして', D: '伺いになって' }, correctAnswer: 'A' },
  { id: 188, stem: '「先生がこの問題を（　）そうです。」', options: { A: '解く', B: '解きます', C: '解かれます', D: 'お解きになります' }, correctAnswer: 'D' },
  { id: 189, stem: '「私は部長にこの資料を（　）。', options: { A: '渡す', B: 'お渡しする', C: '差し上げる', D: 'お渡しになる' }, correctAnswer: 'C' },
  { id: 190, stem: '「お客様が（　）そうです。」', options: { A: '待つ', B: '待ちます', C: 'お待ちになります', D: 'お待ちです' }, correctAnswer: 'C' },
  { id: 191, stem: '「社長がいま（　）ところです。」', options: { A: '会議する', B: '会議になる', C: 'お会議になる', D: 'お会議です' }, correctAnswer: 'C' },
  { id: 192, stem: '「私は先生に（　）。', options: { A: 'お邪魔する', B: 'お邪魔になる', C: 'お邪魔いたす', D: 'お邪魔なさる' }, correctAnswer: 'C' },
  { id: 193, stem: '「ご注文の商品は（　）届けます。」', options: { A: '明日', B: 'お明日', C: '明日までに', D: '明日には' }, correctAnswer: 'C' },
  { id: 194, stem: '「先生がこの本を（　）そうです。」', options: { A: '読む', B: '読みます', C: 'お読みになり', D: 'お読みです' }, correctAnswer: 'C' },
  { id: 195, stem: '「私は部長に（　）。', options: { A: '会う', B: 'お会いになる', C: 'お目にかかる', D: 'お目にかかりになる' }, correctAnswer: 'C' },
  { id: 196, stem: '「お客様には（　）接しなければなりません。」', options: { A: '丁寧に', B: '親しみやすく', C: '礼儀正しく', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 197, stem: '「社長のお宅には（　）行くべきです。」', options: { A: '事前に連絡して', B: '突然', C: 'いつでも', D: '断らずに' }, correctAnswer: 'A' },
  { id: 198, stem: '「お客様からの電話は（　）受けるべきです。」', options: { A: 'すぐに', B: '放置して', C: '適当に', D: '後回しに' }, correctAnswer: 'A' },
  { id: 199, stem: '「社長に報告するときは（　）。', options: { A: '正確に', B: '簡潔に', C: '礼儀正しく', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 200, stem: '「お客様に謝るときは（　）。', options: { A: '本当の気持ちを込めて', B: '軽く', C: '口先だけ', D: '不本意に' }, correctAnswer: 'A' },
  { id: 201, stem: '「ご飯は（　）ですか。」', options: { A: '召し上がり', B: '食べ', C: 'お食べ', D: 'お食べになり' }, correctAnswer: 'A' },
  { id: 202, stem: '「社長はいま（　）ところです。」', options: { A: 'お忙しい', B: 'お忙しいで', C: 'お忙しいに', D: 'お忙しいな' }, correctAnswer: 'A' },
  { id: 203, stem: 'この本は先生が（　）ものです。', options: { A: '書かれた', B: 'お書きになった', C: 'お書きです', D: '書かれます' }, correctAnswer: 'B' },
  { id: 204, stem: '「私は部長に（　）。', options: { A: 'お目にかかります', B: 'お目にかかりになります', C: 'お会いになります', D: 'お会いします' }, correctAnswer: 'A' },
  { id: 205, stem: '「ご用件は（　）ですか。」', options: { A: '何', B: 'どなた', C: 'お何', D: '何様' }, correctAnswer: 'C' },
  { id: 206, stem: '「先生が来られます」と「先生がお越しになります」の違いは？', options: { A: 'ほとんど同じ', B: '「お越しになります」の方が丁寧', C: '「来られます」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 207, stem: '「私は社長に会います」と「私は社長にお目にかかります」の違いは？', options: { A: 'ほとんど同じ', B: '「お目にかかります」の方が丁寧', C: '「会います」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 208, stem: '「先生が本を読みます」と「先生がお読みになります」の違いは？', options: { A: 'ほとんど同じ', B: '「お読みになります」の方が丁寧', C: '「読みます」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 209, stem: '「社長に報告します」と「社長にお報告します」の違いは？', options: { A: 'ほとんど同じ', B: '「お報告します」の方が丁寧', C: '報告します」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 210, stem: '「お客様が待っています」と「お客様がお待ちになっています」の違いは？', options: { A: 'ほとんど同じ', B: '「お待ちになっています」の方が丁寧', C: '「待っています」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 211, stem: '「社長が私に話します」→ 正しい敬語表現は？', options: { A: '社長が私に話されます', B: '社長が私にお話しになります', C: '社長が私にお話しです', D: '社長が私に話してくださいます' }, correctAnswer: 'B' },
  { id: 212, stem: '「私は先生に会います」→ 正しい敬語表現は？', options: { A: '私は先生にお会いになります', B: '私は先生にお目にかかります', C: '私は先生に会いに行きます', D: '私は先生にお会いします' }, correctAnswer: 'B' },
  { id: 213, stem: '「先生が本を読みます」→ 正しい敬語表現は？', options: { A: '先生が本をお読みになります', B: '先生が本をお読みます', C: '先生が本を読まれます', D: '先生が本をお読みになりますか' }, correctAnswer: 'A' },
  { id: 214, stem: '「私は部長に報告します」→ 正しい敬語表現は？', options: { A: '私は部長にお報告します', B: '私は部長にお報告になります', C: '私は部長に報告されます', D: '私は部長に報告いたします' }, correctAnswer: 'A' },
  { id: 215, stem: '「お客様が待っています」→ 正しい敬語表現は？', options: { A: 'お客様がお待ちになっています', B: 'お客様がお待ちです', C: 'お客様が待たれています', D: 'お客様がお待ちになられています' }, correctAnswer: 'A' },
  { id: 216, stem: '「社長がいま会議中です。少々お待ちくださいませ。」→ この表現は？', options: { A: '正しい', B: '「お待ちくださいませ」が誤り', C: '「いま会議中です」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 217, stem: '「ご注文の商品は明日お届けいたします。」→ この表現は？', options: { A: '正しい', B: '「お届けいたします」が誤り', C: '「ご注文の商品」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 218, stem: '「先生、こちらでお待ちいたしますので、どうぞお越しください。」→ この表現は？', options: { A: '正しい', B: '「お待ちいたします」が誤り', C: '「お越しください」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 219, stem: '「社長、ご苦労様です。」→ この表現は？', options: { A: '正しい', B: '「ご苦労様」が誤り', C: '「社長」の呼び方が誤り', D: '全体的に誤り' }, correctAnswer: 'B' },
  { id: 220, stem: '「お客様、いらっしゃいませ。ご用件は何ですか。」→ この表現は？', options: { A: '正しい', B: '「いらっしゃいませ」が誤り', C: '「ご用件は何ですか」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 221, stem: '上司に電話をかけるときのマナーとして正しいのは？', options: { A: 'すぐに名前を告げる', B: '「失礼ですが、部長ですか」と確認する', C: '「こちらは〇〇です」と自己紹介する', D: '何も言わずに話し始める' }, correctAnswer: 'C' },
  { id: 222, stem: 'お客様からの要求に答えるときのマナーとして正しいのは？', options: { A: '「わかりました」と即座に答える', B: '「無理です」と即座に断る', C: '「少々お待ちください」と一旦受け止める', D: '「私には分かりません」と答える' }, correctAnswer: 'C' },
  { id: 223, stem: '謝罪のマナーとして正しいのは？', options: { A: '「申し訳ありません」と軽く謝る', B: '「ただいま調べています」と言い逃れる', C: '「私のせいではありません」と責任を逃れる', D: '「本当に申し訳ありません」と深く頭を下げる' }, correctAnswer: 'D' },
  { id: 224, stem: '上司から指示を受けるときのマナーとして正しいのは？', options: { A: '「わかりました」と答えるだけ', B: '「はい、〇〇ですね」と確認する', C: '「それは難しいです」と即座に断る', D: '何も言わずに黙る' }, correctAnswer: 'B' },
  { id: 225, stem: 'お客様を迎えるときのマナーとして正しいのは？', options: { A: '「いらっしゃいませ」と声を出さずに言う', B: '「こちらへどうぞ」と指差しながら案内する', C: '「お名前は何ですか」とすぐに聞く', D: '微笑みながら「いらっしゃいませ」と声をかける' }, correctAnswer: 'D' },
  { id: 226, stem: '「社長、ご機嫌いかがですか。」→ この表現は？', options: { A: '正しい', B: '「ご機嫌いかがですか」が誤り', C: '「社長」の呼び方が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 227, stem: '「ご家族の皆様によろしくお伝えください。」→ この表現は？', options: { A: '正しい', B: '「ご家族の皆様」が誤り', C: '「お伝えください」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 228, stem: '「先生、この本をどうぞ。」→ この表現は？', options: { A: '正しい', B: '「どうぞ」が誤り', C: '「先生」の呼び方が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 229, stem: '「社長、ご苦労様でした。」→ この表現は？', options: { A: '正しい', B: '「ご苦労様」が誤り', C: '「社長」の呼び方が誤り', D: '全体的に誤り' }, correctAnswer: 'B' },
  { id: 230, stem: '「お客様、ご注文の商品はこちらです。」→ この表現は？', options: { A: '正しい', B: '「ご注文の商品」が誤り', C: '「こちらです」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 231, stem: '「先生が来ます」と「先生がいらっしゃいます」の違いは？', options: { A: 'ほとんど同じ', B: '「いらっしゃいます」の方が丁寧', C: '「来ます」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 232, stem: '「私は社長に会います」と「私は社長にお目にかかります」の違いは？', options: { A: 'ほとんど同じ', B: '「お目にかかります」の方が丁寧', C: '「会います」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 233, stem: '「先生が本を読みます」と「先生がお読みになります」の違いは？', options: { A: 'ほとんど同じ', B: '「お読みになります」の方が丁寧', C: '「読みます」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 234, stem: '「社長に報告します」と「社長にお報告します」の違いは？', options: { A: 'ほとんど同じ', B: '「お報告します」の方が丁寧', C: '報告します」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 235, stem: '「お客様が待っています」と「お客様がお待ちになっています」の違いは？', options: { A: 'ほとんど同じ', B: '「お待ちになっています」の方が丁寧', C: '「待っています」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 236, stem: '「社長が私に話します」→ 正しい敬語表現は？', options: { A: '社長が私に話されます', B: '社長が私にお話しになります', C: '社長が私にお話しです', D: '社長が私に話してくださいます' }, correctAnswer: 'B' },
  { id: 237, stem: '「私は先生に会います」→ 正しい敬語表現は？', options: { A: '私は先生にお会いになります', B: '私は先生にお目にかかります', C: '私は先生に会いに行きます', D: '私は先生にお会いします' }, correctAnswer: 'B' },
  { id: 238, stem: '「先生が本を読みます」→ 正しい敬語表現は？', options: { A: '先生が本をお読みになります', B: '先生が本をお読みます', C: '先生が本を読まれます', D: '先生が本をお読みになりますか' }, correctAnswer: 'A' },
  { id: 239, stem: '「私は部長に報告します」→ 正しい敬語表現は？', options: { A: '私は部長にお報告します', B: '私は部長にお報告になります', C: '私は部長に報告されます', D: '私は部長に報告いたします' }, correctAnswer: 'A' },
  { id: 240, stem: '「お客様が待っています」→ 正しい敬語表現は？', options: { A: 'お客様がお待ちになっています', B: 'お客様がお待ちです', C: 'お客様が待たれています', D: 'お客様がお待ちになられています' }, correctAnswer: 'A' },
  { id: 241, stem: '「社長がいま会議中です。少々お待ちくださいませ。」→ この表現は？', options: { A: '正しい', B: '「お待ちくださいませ」が誤り', C: '「いま会議中です」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 242, stem: '「ご注文の商品は明日お届けいたします。」→ この表現は？', options: { A: '正しい', B: '「お届けいたします」が誤り', C: '「ご注文の商品」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 243, stem: '「先生、こちらでお待ちいたしますので、どうぞお越しください。」→ この表現は？', options: { A: '正しい', B: '「お待ちいたします」が誤り', C: '「お越しください」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 244, stem: '「社長、ご苦労様です。」→ この表現は？', options: { A: '正しい', B: '「ご苦労様」が誤り', C: '「社長」の呼び方が誤り', D: '全体的に誤り' }, correctAnswer: 'B' },
  { id: 245, stem: '「お客様、ご注文の商品はこちらです。」→ この表現は？', options: { A: '正しい', B: '「ご注文の商品」が誤り', C: '「こちらです」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 246, stem: '「先生が来ます」と「先生がいらっしゃいます」の違いは？', options: { A: 'ほとんど同じ', B: '「いらっしゃいます」の方が丁寧', C: '「来ます」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 247, stem: '「私は社長に会います」と「私は社長にお目にかかります」の違いは？', options: { A: 'ほとんど同じ', B: '「お目にかかります」の方が丁寧', C: '「会います」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 248, stem: '「先生が本を読みます」と「先生がお読みになります」の違いは？', options: { A: 'ほとんど同じ', B: '「お読みになります」の方が丁寧', C: '「読みます」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 249, stem: '「社長に報告します」と「社長にお報告します」の違いは？', options: { A: 'ほとんど同じ', B: '「お報告します」の方が丁寧', C: '報告します」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 250, stem: '「お客様が待っています」と「お客様がお待ちになっています」の違いは？', options: { A: 'ほとんど同じ', B: '「お待ちになっています」の方が丁寧', C: '「待っています」の方が丁寧', D: '使い分けない' }, correctAnswer: 'B' },
  { id: 251, stem: '私は将来、医者（　）なりたいです。', options: { A: 'に', B: 'が', C: 'を', D: 'で' }, correctAnswer: 'A' },
  { id: 252, stem: '妹はいつもお菓子を（　）。', options: { A: '食べたい', B: '食べたがる', C: '食べる', D: '食べます' }, correctAnswer: 'B' },
  { id: 253, stem: '彼は日本へ行くのが（　）そうです。', options: { A: '好き', B: '嫌い', C: '楽しみ', D: '怖い' }, correctAnswer: 'C' },
  { id: 254, stem: '私はピアノを（　）弾きたいです。', options: { A: '上手に', B: '上手な', C: '上手で', D: '上手は' }, correctAnswer: 'A' },
  { id: 255, stem: '友達に会いに行きたい（　）と思います。', options: { A: 'と', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'A' },
  { id: 256, stem: '今、本を（　）います。', options: { A: '読む', B: '読んで', C: '読み', D: '読みます' }, correctAnswer: 'B' },
  { id: 257, stem: '昨日、映画を（　）。', options: { A: '見る', B: '見て', C: '見た', D: '見ます' }, correctAnswer: 'C' },
  { id: 258, stem: '彼は3年間日本に（　）います。', options: { A: '住む', B: '住んで', C: '住み', D: '住みます' }, correctAnswer: 'B' },
  { id: 259, stem: '私は先週病院へ（　）。', options: { A: '行く', B: '行って', C: '行き', D: '行った' }, correctAnswer: 'D' },
  { id: 260, stem: '母は今キッチンで料理を（　）います。', options: { A: '作る', B: '作って', C: '作り', D: '作ります' }, correctAnswer: 'B' },
  { id: 261, stem: '雨が降れば、傘を（　）。', options: { A: '持つ', B: '持って', C: '持ち', D: '持ちます' }, correctAnswer: 'D' },
  { id: 262, stem: '明日晴れたら、公園へ（　）。', options: { A: '行く', B: '行って', C: '行き', D: '行きます' }, correctAnswer: 'D' },
  { id: 263, stem: '日本へ行くなら、富士山を（　）。', options: { A: '見る', B: '見て', C: '見', D: '見ます' }, correctAnswer: 'D' },
  { id: 264, stem: '春になると、花が（　）。', options: { A: '咲く', B: '咲いて', C: '咲き', D: '咲きます' }, correctAnswer: 'A' },
  { id: 265, stem: 'もし彼に会ったら、この手紙を（　）。', options: { A: '渡す', B: '渡って', C: '渡し', D: '渡します' }, correctAnswer: 'D' },
  { id: 266, stem: '先生は学生に宿題を（　）。', options: { A: '書かせる', B: '書かれる', C: '書く', D: '書きます' }, correctAnswer: 'A' },
  { id: 267, stem: '私は父にご飯を（　）。', options: { A: '食べさせる', B: '食べられる', C: '食べる', D: '食べます' }, correctAnswer: 'B' },
  { id: 268, stem: '昨日、友達にプレゼントを（　）。', options: { A: '貰う', B: '貰って', C: '貰わせる', D: '貰われる' }, correctAnswer: 'D' },
  { id: 269, stem: '母は子供を公園へ（　）。', options: { A: '行かせる', B: '行かれる', C: '行く', D: '行きます' }, correctAnswer: 'A' },
  { id: 270, stem: '彼は朝早く起こされて（　）。', options: { A: '困る', B: '困って', C: '困らせる', D: '困られる' }, correctAnswer: 'B' },
  { id: 271, stem: '私は学生（　）。', options: { A: 'です', B: 'ます', C: 'だ', D: 'で' }, correctAnswer: 'A' },
  { id: 272, stem: '食事を（　）。', options: { A: 'します', B: 'した', C: 'して', D: 'します' }, correctAnswer: 'B' },
  { id: 273, stem: 'これは本（　）。', options: { A: 'です', B: 'ます', C: 'だ', D: 'で' }, correctAnswer: 'A' },
  { id: 274, stem: '私は日本語を（　）。', options: { A: '勉強する', B: '勉強します', C: '勉強です', D: '勉強' }, correctAnswer: 'B' },
  { id: 275, stem: '明日は日曜日（　）。', options: { A: 'です', B: 'ます', C: 'だ', D: 'で' }, correctAnswer: 'A' },
  { id: 276, stem: '彼はもう来た（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'B' },
  { id: 277, stem: 'この問題は簡単だから、誰でも解ける（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'B' },
  { id: 278, stem: '天気予報によると、明日は雨（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'D' },
  { id: 279, stem: '彼の話によると、彼は医者（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'D' },
  { id: 280, stem: 'この本は面白い（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'B' },
  { id: 281, stem: 'あの人は日本人（　）見えます。', options: { A: 'そう', B: 'よう', C: 'みたい', D: 'らしい' }, correctAnswer: 'B' },
  { id: 282, stem: 'このケーキは美味しい（　）です。', options: { A: 'そう', B: 'よう', C: 'みたい', D: 'らしい' }, correctAnswer: 'A' },
  { id: 283, stem: '雨が降りそうだから、傘を（　）。', options: { A: '持つ', B: '持って', C: '持ち', D: '持ちます' }, correctAnswer: 'D' },
  { id: 284, stem: '彼は学生の（　）です。', options: { A: 'そう', B: 'よう', C: 'みたい', D: 'らしい' }, correctAnswer: 'D' },
  { id: 285, stem: 'この問題は難しい（　）です。', options: { A: 'そう', B: 'よう', C: 'みたい', D: 'らしい' }, correctAnswer: 'A' },
  { id: 286, stem: 'この問題は（　）難しくない。', options: { A: 'ほど', B: 'くらい', C: 'ぐらい', D: 'ばかり' }, correctAnswer: 'A' },
  { id: 287, stem: '私は彼ほど上手に（　）。', options: { A: 'できない', B: 'できる', C: 'でき', D: 'できます' }, correctAnswer: 'A' },
  { id: 288, stem: 'この町は10年前ほど（　）になりました。', options: { A: '賑やか', B: '賑やかな', C: '賑やかに', D: '賑やかだ' }, correctAnswer: 'C' },
  { id: 289, stem: 'この本は私の背の高さ（　）あります。', options: { A: 'ほど', B: 'くらい', C: 'ぐらい', D: 'ばかり' }, correctAnswer: 'B' },
  { id: 290, stem: '彼は食べ物が好きで、一日（　）3回食べます。', options: { A: 'ほど', B: 'くらい', C: 'ぐらい', D: 'ばかり' }, correctAnswer: 'B' },
  { id: 291, stem: '食事を（　）学校へ行きました。', options: { A: 'しないで', B: 'しずに', C: 'せずに', D: 'しなくて' }, correctAnswer: 'C' },
  { id: 292, stem: '彼は一言（　）立ち去りました。', options: { A: '言わないで', B: '言わずに', C: '言えずに', D: '言わなくて' }, correctAnswer: 'B' },
  { id: 293, stem: '雨が降っているのに、彼は傘を（　）出かけました。', options: { A: '持たないで', B: '持たずに', C: '持てずに', D: '持たなくて' }, correctAnswer: 'B' },
  { id: 294, stem: '私は朝ご飯を（　）会社へ行きます。', options: { A: '食べないで', B: '食べずに', C: '食べられずに', D: '食べなくて' }, correctAnswer: 'B' },
  { id: 295, stem: '彼は仕事を（　）休みを取りました。', options: { A: '終わらないで', B: '終わらずに', C: '終われずに', D: '終わらなくて' }, correctAnswer: 'B' },
  { id: 296, stem: '私はちょうど家に（　）ところです。', options: { A: '帰る', B: '帰った', C: '帰って', D: '帰ります' }, correctAnswer: 'B' },
  { id: 297, stem: '彼は日本語が上手です（　）、英語もできます。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 298, stem: 'この店は安い（　）、品質もいいです。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 299, stem: '彼女は美しい（　）、頭もいいです。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 300, stem: '彼は歌手（　）、作曲家でもあります。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 301, stem: 'この店は安い（　）、品質もいいです。', options: { A: 'ばかりか', B: 'だけでなく', C: 'に加えて', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 302, stem: '彼はもう来た（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'B' },
  { id: 303, stem: '天気予報によると、明日は雨（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'D' },
  { id: 304, stem: 'この問題は簡単だから、誰でも解ける（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'B' },
  { id: 305, stem: '彼の話によると、彼は医者（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'D' },
  { id: 306, stem: 'この本は面白い（　）。', options: { A: 'べき', B: 'はず', C: 'らしい', D: 'そう' }, correctAnswer: 'B' },
  { id: 307, stem: '先生は学生の質問（　）丁寧に答えました。', options: { A: 'に対して', B: 'に関して', C: 'について', D: '以上すべて' }, correctAnswer: 'A' },
  { id: 308, stem: '私はこの問題（　）考えています。', options: { A: 'に対して', B: 'に関して', C: 'について', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 309, stem: '彼は政治（　）深い知識を持っています。', options: { A: 'に対して', B: 'に関して', C: 'について', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 310, stem: 'この本は環境問題（　）書かれています。', options: { A: 'に対して', B: 'に関して', C: 'について', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 311, stem: '教師は生徒（　）公平に接しなければなりません。', options: { A: 'に対して', B: 'に関して', C: 'について', D: '以上すべて' }, correctAnswer: 'A' },
  { id: 312, stem: '私はちょうど食事を（　）ところです。', options: { A: 'する', B: 'した', C: 'して', D: 'します' }, correctAnswer: 'B' },
  { id: 313, stem: '彼は日本語が上手です（　）、英語もできます。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 314, stem: 'この店は安い（　）、品質もいいです。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 315, stem: '彼女は美しい（　）、頭もいいです。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 316, stem: '彼は歌手（　）、作曲家でもあります。', options: { A: 'たばかり', B: 'ばかりか', C: 'ばかりでなく', D: 'BとC' }, correctAnswer: 'D' },
  { id: 317, stem: '事故（　）、電車が遅れました。', options: { A: 'によって', B: 'による', C: 'により', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 318, stem: '天気（　）、試合は延期されました。', options: { A: 'によって', B: 'による', C: 'により', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 319, stem: '彼の努力（　）、成功しました。', options: { A: 'によって', B: 'による', C: 'により', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 320, stem: '地域（　）、習慣が異なります。', options: { A: 'によって', B: 'による', C: 'により', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 321, stem: 'この規則は学校（　）異なります。', options: { A: 'によって', B: 'による', C: 'により', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 322, stem: 'この規則は学校（　）異なります。', options: { A: 'によって', B: 'による', C: 'により', D: '以上すべて' }, correctAnswer: 'D' },
  { id: 338, stem: '彼は日本語を＿＿＿年間勉強しています。', options: { A: '三', B: '三つ', C: '三か月', D: '三年' }, correctAnswer: 'D' },
  { id: 339, stem: '明日は雨＿＿＿降るでしょう。', options: { A: 'が', B: 'を', C: 'に', D: 'で' }, correctAnswer: 'A' },
  { id: 340, stem: '彼は＿＿＿学校へ行きます。', options: { A: '自転車', B: '自転車に', C: '自転車で', D: '自転車を' }, correctAnswer: 'C' },
  { id: 341, stem: '私は昨日友達＿＿＿会いました。', options: { A: 'と', B: 'が', C: 'を', D: 'に' }, correctAnswer: 'A' },
  { id: 342, stem: 'この本は＿＿＿ですか。', options: { A: 'だれ', B: 'どこ', C: 'いつ', D: 'なに' }, correctAnswer: 'A' },
  { id: 343, stem: 'この町は昔＿＿＿町でした。', options: { A: '賑やか', B: '賑やかな', C: '賑やかに', D: '賑やかだ' }, correctAnswer: 'B' },
  { id: 344, stem: '私は日本料理が＿＿＿です。', options: { A: '好き', B: '好きな', C: '好きに', D: '好きだ' }, correctAnswer: 'D' },
  { id: 345, stem: '彼は＿＿＿人です。', options: { A: '親切', B: '親切な', C: '親切に', D: '親切だ' }, correctAnswer: 'B' },
  { id: 346, stem: 'この問題は＿＿＿です。', options: { A: '難しい', B: '難しいな', C: '難しく', D: '難しくて' }, correctAnswer: 'A' },
  { id: 347, stem: '私は＿＿＿を買いました。', options: { A: '新しい', B: '新しいの', C: '新しい本', D: '新しく本' }, correctAnswer: 'C' },
  { id: 348, stem: '彼は＿＿＿日本語を話します。', options: { A: '上手', B: '上手な', C: '上手に', D: '上手で' }, correctAnswer: 'C' },
  { id: 349, stem: '私は学校で＿＿＿を勉強しています。', options: { A: '日本語', B: '英語', C: '中国語', D: 'フランス語' }, correctAnswer: 'B' },
  { id: 350, stem: '英語は＿＿＿ですが、面白いです。', options: { A: '簡単', B: '難しい', C: '楽しい', D: '嫌い' }, correctAnswer: 'B' },
  { id: 351, stem: '私は毎日＿＿＿英語の本を読みます。', options: { A: '10分', B: '20分', C: '30分', D: '40分' }, correctAnswer: 'C' },
  { id: 352, stem: '私は友達と＿＿＿で話すのが好きです。', options: { A: '日本語', B: '英語', C: '中国語', D: 'フランス語' }, correctAnswer: 'B' },
  { id: 353, stem: '来週、＿＿＿の試験があります。', options: { A: '日本語', B: '英語', C: '中国語', D: 'フランス語' }, correctAnswer: 'B' },
  { id: 354, stem: '女：すみません、ここは図書館ですか？\n男：はい、そうです。\n女：何時に開きますか？\n男：9時に開きます。\n女：何時に閉まりますか？\n男：6時に閉まります。', options: { A: '学校', B: '駅', C: '図書館', D: '店' }, correctAnswer: 'C' },
  { id: 355, stem: '女の人は＿＿＿に行きたいです。', options: { A: '学校', B: '駅', C: '図書館', D: '店' }, correctAnswer: 'C' },
  { id: 356, stem: '図書館は＿＿＿に開きます。', options: { A: '8時', B: '9時', C: '10時', D: '11時' }, correctAnswer: 'B' },
  { id: 357, stem: '図書館は＿＿＿に閉まります。', options: { A: '5時', B: '6時', C: '7時', D: '8時' }, correctAnswer: 'B' },
  { id: 358, stem: '男の人は＿＿＿です。', options: { A: '学生', B: '教師', C: '図書館の係り', D: '店員' }, correctAnswer: 'C' },
  { id: 359, stem: '女の人は＿＿＿を借りたいです。', options: { A: '本', B: '雑誌', C: 'CD', D: '文章に書いてありません' }, correctAnswer: 'D' },
  { id: 360, stem: '「私は昨日公園へ行きました。公園にはたくさんの人がいました。」', options: { A: '正しい', B: '「公園へ行きました」が誤り', C: '「たくさんの人がいました」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 361, stem: '「彼は学校に行くのが嫌いです。」', options: { A: '正しい', B: '「学校に行く」が誤り', C: '「嫌いです」が誤り', D: '全体的に誤り' }, correctAnswer: 'A' },
  { id: 362, stem: '「私は日本語を話せます。」', options: { A: '正しい', B: '「話せます」が误り', C: '「日本語を」が误り', D: '全体的に误り' }, correctAnswer: 'A' },
];

const selectRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function FillInTheBlanksPracticePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(selectRandomQuestions(allQuestions, 30));
  }, []);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleReset = () => {
    setQuestions(selectRandomQuestions(allQuestions, 30));
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">选择题练习</h1>
      {questions.map((question, index) => (
        <div key={question.id} className="mb-6">
          <p className="mb-2">{index + 1}. {question.stem}</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(question.options).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={key}
                  checked={answers[question.id] === key}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  disabled={showResults}
                  className="form-radio"
                />
                <span>{key}. {value}</span>
              </label>
            ))}
          </div>
          {showResults && (
            <p className={`mt-2 ${answers[question.id] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
              正确答案: {question.correctAnswer}
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