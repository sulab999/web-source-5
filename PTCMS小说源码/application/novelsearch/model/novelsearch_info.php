<?php
class NovelSearch_infoModel extends Model
{
    public function add($zym_16)
    {
        $zym_16['pinyin'] = pinyin::change($zym_16['name']);
        do {
            $zym_17 = $this->field('id')->where(array('pinyin' => $zym_16['pinyin']))->find();
            if (!empty($zym_17)) {
                $zym_16['pinyin'] .= rand(0, 9);
            }
        } while (!empty($zym_17));
        $zym_16['authorid'] = (new AuthorModel())->getid($zym_16['author']);
        $zym_16['initial'] = $zym_16['pinyin'][0];
        $zym_16['postdate'] = time();
        $zym_16['lastupdate'] = time();
        return $this->insert($zym_16);
    }
    public function edit($zym_16)
    {
        $zym_17 = $this->update($zym_16);
        if ($zym_17 && is_numeric($zym_16['id'])) {
            dc::rm('novelsearch_info', $zym_16['id']);
        }
        return $zym_17;
    }
    public function del($zym_15)
    {
        if (isset($zym_15['id']) and is_numeric($zym_15['id'])) {
            $zym_16 = $this->get('novelsearch_info', $zym_15['id']);
            cache::rm("key2id_{$zym_16['novel']['pinyin']}");
            $this->rm('novelsearch_info', $zym_15['id']);
            (new NovelSearch_LogModel())->where(['novelid' => $zym_15['id']])->delete();
            (new NovelSearch_chapterModel())->setTableId($zym_15['id'])->where(['novelid' => $zym_15['id']])->delete();
        }
        $this->where($zym_15)->delete();
    }
    public function getlist()
    {
        $zym_20 = $this->select();
        if ($zym_20) {
            foreach ($zym_20 as &$zym_21) {
                $zym_21 = $this->dataAppend($zym_21);
            }
        } else {
            $zym_20 = array();
        }
        return $zym_20;
    }
    public function dataAppend($zym_16)
    {
        $zym_13 = dc::get('category', $zym_16['categoryid']);
        $zym_14['novel'] = array('id' => $zym_16['id'], 'name' => $zym_16['name'], 'pinyin' => $zym_16['pinyin'], 'initial' => $zym_16['initial'], 'caption' => $zym_16['caption'], 'intro' => $zym_16['intro'], 'postdate' => $zym_16['postdate'], 'isgood' => $zym_16['isgood'], 'status' => $zym_16['status'], 'isover' => $zym_16['isover'], 'cover' => empty($zym_16['cover']) ? PT_DIR . '/public/image/nocover.jpg' : $zym_16['cover'], 'url_info' => U('novelsearch.novel.index', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])), 'url_chapterlist' => U('novelsearch.chapter.list', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])));
        $zym_14['author'] = array('name' => '未知', 'url' => "#");
        if (!empty($zym_16['author'])) {
            if ($zym_10 = (new AuthorModel())->field('id,pinyin')->where(['name' => $zym_16['author']])->find()) {
                $zym_14['author'] = ['name' => $zym_16['author'], 'url' => U('novelsearch.novel.author', ['author' => urlencode($zym_16['author']), 'authorid' => $zym_10['id'], 'authorpinyin' => $zym_10['pinyin']])];
            }
        }
        $zym_14['category'] = array('id' => $zym_16['categoryid'], 'name' => $zym_13['name'], 'url' => $zym_13['url']);
        $zym_14['last'] = array('id' => $zym_16['lastchapterid'], 'name' => $zym_16['lastchaptername'], 'time' => $zym_16['lastupdate'], 'siteid' => $zym_16['lastsiteid'], 'sign' => $zym_16['chaptersign'], 'url' => U('novelsearch.chapter.read', array('chapterid' => $zym_16['lastchapterid'], 'novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])));
        $zym_14['data'] = array('allvisit' => $zym_16['allvisit'], 'monthvisit' => $zym_16['monthvisit'], 'weekvisit' => $zym_16['weekvisit'], 'dayvisit' => isset($zym_16['dayvisit']) ? $zym_16['dayvisit'] : 0, 'marknum' => isset($zym_16['marknum']) ? $zym_16['marknum'] : 0, 'commnum' => isset($zym_16['commnum']) ? $zym_16['commnum'] : 0, 'votenum' => isset($zym_16['votenum']) ? $zym_16['votenum'] : 0, 'downnum' => isset($zym_16['downnum']) ? $zym_16['downnum'] : 0, 'isgood' => isset($zym_16['isgood']) ? $zym_16['isgood'] : 0);
        $zym_14['operate'] = array('addmark' => U('user.mark.add', array('novelid' => $zym_16['id'])));
        if ($zym_16['siteid'] > 0) {
            $zym_6 = (new NovelSearch_SiteModel())->field(['name', 'url', 'key'])->where(['id' => $zym_16['siteid']])->find();
            $zym_14['source'] = ['siteid' => $zym_16['siteid'], 'sitename' => $zym_6['name'], 'siteurl' => $zym_6['url'], 'sitekey' => $zym_6['key'], 'orderid' => $zym_16['orderid'], 'sitehost' => str_ireplace('www.', '', parse_url($zym_6['url'], PHP_URL_HOST))];
        } else {
            $zym_14['source'] = ['siteid' => '0', 'sitename' => '本站原创', 'siteurl' => $this->pt->config->get('siteurl'), 'sitekey' => '', 'sitehost' => str_ireplace('www.', '', parse_url($this->pt->config->get('siteurl'), PHP_URL_HOST))];
        }
        $zym_14['url'] = array('first' => U('novelsearch.chapter.read', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'], 'chapterid' => 1)), 'info' => U('novelsearch.novel.index', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])), 'dir' => U('novelsearch.novel.dir', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])), 'down' => U('novelsearch.novel.down', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])), 'readend' => U('novelsearch.novel.readend', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])), 'chapterlist' => U('novelsearch.chapter.list', array('novelid' => $zym_16['id'], 'novelkey' => $zym_16['pinyin'])), 'addmark' => U('user.mark.add', array('novelid' => $zym_16['id'])), 'vote' => U('user.vote.add', array('novelid' => $zym_16['id'])));
        return $zym_14;
    }
    public function getinfo($zym_5)
    {
        $zym_16 = $this->where(array('id' => $zym_5))->find();
        $zym_16 = $this->dataAppend($zym_16);
        return $zym_16;
    }
    public function key2id($zym_19)
    {
        $zym_7 = 'key2id_' . $zym_19;
        $zym_5 = cache::get($zym_7);
        if ($zym_5 === null) {
            $zym_5 = $this->where(array('pinyin' => $zym_19))->getfield('id');
            if ($zym_5) {
                cache::set($zym_7, $zym_5);
            }
        }
        return (int) $zym_5;
    }
    public function getpagelist($zym_15, $zym_18 = 'id', $zym_12 = 1, $zym_11 = 10)
    {
        $zym_19 = serialize(func_get_args());
        $zym_20 = null;
        if (!APP_DEBUG && $zym_12 < 6) {
            $zym_20 = cache::get($zym_19);
        }
        if ($zym_20 === null) {
            $zym_15['status'] = 1;
            if ($zym_18 == 'postdate') {
                $zym_18 = 'id';
            }
            $zym_20 = $this->where($zym_15)->page($zym_12)->limit($zym_11)->order($zym_18 . ' desc')->getlist();
            if ($zym_12 < 6) {
                cache::set($zym_19, $zym_20, 300);
            }
        }
        return $zym_20;
    }
    public function getcount($zym_15)
    {
        $zym_19 = "categorylist_count_" . md5(serialize($zym_15));
        $zym_8 = cache::get($zym_19);
        if (APP_DEBUG || !$zym_8) {
            $zym_15['status'] = 1;
            $zym_8 = $this->where($zym_15)->count();
            cache::set($zym_19, $zym_8, 86400);
        }
        return intval($zym_8);
    }
	 public function getsum($zym_15)
    {
        $zym_19 = "categorylist_sum_" . md5(serialize($zym_15));
        $zym_8 = cache::get($zym_19);
        if (APP_DEBUG || !$zym_8) {
            $zym_8 = $this->sum($zym_15);
            cache::set($zym_19, $zym_8, 3600);
        }
        return intval($zym_8);
    }
    public function incvisit($zym_5)
    {
        $zym_19 = 'novelvisit_' . $zym_5;
        $zym_8 = cache::getInstance()->inc($zym_19, 1);
        if ($zym_8) {
            if ($zym_8 >= C('visit_update', null, 7)) {
                $zym_8 = C('visit_num') * $zym_8;
                $zym_14 = array('dayvisit' => array('exp', 'dayvisit+' . $zym_8), 'weekvisit' => array('exp', 'weekvisit+' . $zym_8), 'monthvisit' => array('exp', 'monthvisit+' . $zym_8), 'allvisit' => array('exp', 'allvisit+' . $zym_8), 'id' => $zym_5);
                $zym_17 = $this->update($zym_14);
                if ($zym_17) {
                    dc::refresh('novelsearch_info', $zym_5);
                    cache::rm($zym_19);
                }
            }
        } else {
            cache::set($zym_19, 1);
        }
    }
    public function setvisit()
    {
        $zym_9 = date('Ymd');
        if ($zym_9 <= C('visit_day')) {
            return;
        }
        $zym_14 = array();
        $zym_14['dayvisit'] = 0;
        if (date('d') == 1) {
            $zym_14['monthvisit'] = 0;
        }
        if (date('w') == 1) {
            $zym_14['weekvisit'] = 0;
        }
        $this->update($zym_14);
        M('config')->where(array('key' => 'visit_day'))->edit(array('value' => $zym_9));
    }
}