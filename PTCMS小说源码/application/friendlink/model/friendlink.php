<?php
class FriendlinkModel extends Model
{
    public function add($zym_7)
    {
        return $this->insert($zym_7);
    }
    public function edit($zym_7)
    {
        return $this->update($zym_7);
    }
    public function del($zym_8)
    {
        $this->where($zym_8)->delete();
    }
    public function getlist()
    {
        $zym_6 = (array) $this->select();
        foreach ($zym_6 as &$zym_5) {
            $zym_5['showname'] = $this->getshowname($zym_5);
            if (isset($zym_5['create_user_id'])) {
                $zym_5['url'] = truncate($zym_5['url'], 30, '......');
                $zym_5['create_username'] = dc::get('user', $zym_5['create_user_id'], 'name');
                $zym_5['update_username'] = dc::get('user', $zym_5['update_user_id'], 'name');
                $zym_5['url_edit'] = U('friendlink.manage.edit', array('id' => $zym_5['id']));
                $zym_5['create_time'] = $zym_5['create_time'] ? date('Y-m-d H:i', $zym_5['create_time']) : '';
                $zym_5['update_time'] = $zym_5['update_time'] ? date('Y-m-d H:i', $zym_5['update_time']) : '';
            }
        }
        return $zym_6;
    }
    public function getshowname($zym_5)
    {
        $zym_5['showname'] = $zym_5['name'];
        if ($zym_5['isbold']) {
            $zym_5['showname'] = '<b>' . $zym_5['showname'] . '</b>';
        }
        if ($zym_5['color'] !== '') {
            $zym_5['showname'] = "<font color={$zym_5['color']}>{$zym_5['showname']}</font>";
        }
        return $zym_5['showname'];
    }
}